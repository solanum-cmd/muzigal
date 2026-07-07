"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { teachers, academies, subjects, citiesByState } from "@/lib/mockData";
import { useAuth } from "@/context/AuthContext";
import { Search, ChevronDown, Menu, X, User, LogOut } from "lucide-react";

const Header = () => {
  const [isTeacherHovered, setIsTeacherHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  // Scroll listener for header background change
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    let results: any[] = [];

    if (pathname?.startsWith('/find-an-academy')) {
      const cityMatches = Object.values(citiesByState).flat().filter(city => city.toLowerCase().includes(query)).map(city => ({ type: 'City', name: city }));
      const academyMatches = academies.filter(a => a.name.toLowerCase().includes(query) || a.area.toLowerCase().includes(query)).map(a => ({ type: 'Academy', name: a.name, id: a.id }));
      results = [...cityMatches, ...academyMatches];
    } else {
      const subjectMatches = subjects.filter(s => s.toLowerCase().includes(query)).map(s => ({ type: 'Subject', name: s }));
      const teacherMatches = teachers.filter(t => t.name.toLowerCase().includes(query)).map(t => ({ type: 'Teacher', name: t.name, id: t.id }));
      results = [...subjectMatches, ...teacherMatches];
    }
    setSuggestions(results.slice(0, 5));
  }, [searchQuery, pathname]);

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
    <>
      <header
        className={`sticky top-0 z-50 w-full h-[72px] flex items-center transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(15,23,42,0.08)] border-b border-[#e2e8f0]/60"
            : "bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]/40"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between max-w-[1240px]">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <Image
                src="https://muzigal.com/images/logo.svg"
                width={130}
                height={38}
                alt="Muzigal"
                priority
                className="transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
          </div>

          {/* Navigation & Search Container */}
          <div className="flex items-center gap-6 flex-grow justify-end">
            {/* Main Nav Links */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/find-an-academy"
                className="relative px-4 py-2 text-[#0f172a] font-semibold text-[14px] rounded-lg hover:bg-[#f1f5f9] transition-all duration-200 group"
              >
                Find An Academy
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#e11d73] to-[#be185d] rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setIsTeacherHovered(true)}
                onMouseLeave={() => setIsTeacherHovered(false)}
              >
                <Link
                  href="/learn-music"
                  className="relative flex items-center gap-1 px-4 py-2 text-[#0f172a] font-semibold text-[14px] rounded-lg hover:bg-[#f1f5f9] transition-all duration-200 group"
                >
                  Find A Teacher
                  <ChevronDown className={`w-3.5 h-3.5 text-[#64748b] transition-transform duration-300 ${isTeacherHovered ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#e11d73] to-[#be185d] rounded-full transition-all duration-300 group-hover:w-3/4" />
                </Link>

                {/* Mega Menu Dropdown */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                    isTeacherHovered ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  }`}
                >
                  <div className="bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.12)] border border-[#e2e8f0]/60 rounded-2xl p-6 min-w-[700px]">
                    <div className="grid grid-cols-4 gap-8">
                      {categories.slice(0, 4).map((cat) => (
                        <div key={cat.title}>
                          <h4 className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#94a3b8] mb-3 pb-2 border-b border-[#f1f5f9]">
                            {cat.title}
                          </h4>
                          <ul className="space-y-1">
                            {cat.items.map((item) => (
                              <li key={item.name}>
                                <Link
                                  href={item.href}
                                  className="text-[#334155] text-[13px] hover:text-[#e11d73] block py-1 px-2 rounded-md hover:bg-[#fce7f3]/50 transition-all duration-150"
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
                </div>
              </div>

              <Link
                href="https://shop.muzigal.com/"
                target="_blank"
                className="relative px-4 py-2 text-[#0f172a] font-semibold text-[14px] rounded-lg hover:bg-[#f1f5f9] transition-all duration-200 group"
              >
                Shop
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#e11d73] to-[#be185d] rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="relative hidden md:block w-full max-w-[260px]">
              <form onSubmit={(e) => {
                e.preventDefault();
                if (searchQuery) {
                  if (pathname?.startsWith('/find-an-academy')) {
                    router.push(`/find-an-academy?q=${encodeURIComponent(searchQuery)}`);
                  } else {
                    router.push(`/learn-music?q=${encodeURIComponent(searchQuery)}`);
                  }
                }
              }}>
                <div className={`flex items-center rounded-xl py-2.5 px-3.5 transition-all duration-300 ${
                  searchFocused
                    ? "bg-white ring-2 ring-[#e11d73]/30 shadow-[0_0_0_4px_rgba(225,29,115,0.08)]"
                    : "bg-[#f1f5f9] hover:bg-[#e2e8f0]/70"
                }`}>
                  <Search className={`w-4 h-4 transition-colors duration-200 ${searchFocused ? 'text-[#e11d73]' : 'text-[#94a3b8]'}`} />
                  <input
                    type="text"
                    placeholder="Search academy, teacher..."
                    value={searchQuery}
                    onChange={(e) => { setSearchQuery(e.target.value); setShowSuggestions(true); }}
                    onFocus={() => { setShowSuggestions(true); setSearchFocused(true); }}
                    onBlur={() => { setTimeout(() => setShowSuggestions(false), 200); setSearchFocused(false); }}
                    className="bg-transparent border-none outline-none text-[13px] text-[#0f172a] ml-2.5 w-full placeholder:text-[#94a3b8] font-medium"
                  />
                </div>
              </form>
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-[#e2e8f0] rounded-xl shadow-[0_10px_40px_rgba(15,23,42,0.12)] overflow-hidden z-50">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="px-4 py-2.5 hover:bg-[#f1f5f9] cursor-pointer text-[13px] text-[#334155] flex items-center justify-between transition-colors duration-150"
                      onClick={() => {
                        setSearchQuery(suggestion.name);
                        setShowSuggestions(false);
                        if (pathname?.startsWith('/find-an-academy')) {
                          router.push(`/find-an-academy?q=${encodeURIComponent(suggestion.name)}`);
                        } else {
                          router.push(`/learn-music?q=${encodeURIComponent(suggestion.name)}`);
                        }
                      }}
                    >
                      <span className="font-medium">{suggestion.name}</span>
                      <span className="text-[10px] text-[#94a3b8] bg-[#f1f5f9] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                        {suggestion.type}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Login/User Button */}
            <div className="flex-shrink-0 hidden lg:block">
              {user ? (
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-[#f1f5f9] rounded-full pl-1.5 pr-4 py-1.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#e11d73] to-[#be185d] flex items-center justify-center">
                      <User size={14} className="text-white" />
                    </div>
                    <span className="text-[#0f172a] font-semibold text-[13px]">{user.firstName}</span>
                  </div>
                  <button
                    onClick={async () => { await logout(); }}
                    className="flex items-center gap-1.5 text-[#64748b] text-[13px] font-medium hover:text-[#e11d73] transition-colors duration-200"
                  >
                    <LogOut size={14} />
                    Logout
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <button className="relative overflow-hidden bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white px-6 py-2.5 rounded-xl font-semibold text-[13px] transition-all duration-300 hover:shadow-[0_4px_20px_rgba(225,29,115,0.3)] hover:scale-[1.02] active:scale-[0.98]">
                    <span className="relative z-10">Login / Sign up</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#be185d] to-[#e11d73] opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </button>
                </Link>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors"
            >
              {mobileMenuOpen ? <X size={22} className="text-[#0f172a]" /> : <Menu size={22} className="text-[#0f172a]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="absolute top-[72px] right-0 w-full max-w-[320px] h-[calc(100vh-72px)] bg-white shadow-2xl overflow-y-auto animate-slide-in-right">
            <div className="p-6 space-y-6">
              {/* Mobile Search */}
              <div className="relative">
                <div className="flex items-center bg-[#f1f5f9] rounded-xl py-3 px-4">
                  <Search className="w-4 h-4 text-[#94a3b8]" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none text-[14px] text-[#0f172a] ml-2.5 w-full placeholder:text-[#94a3b8]"
                  />
                </div>
              </div>

              {/* Mobile Nav Links */}
              <nav className="space-y-1">
                <Link
                  href="/find-an-academy"
                  className="block px-4 py-3 text-[#0f172a] font-semibold text-[15px] rounded-xl hover:bg-[#f1f5f9] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find An Academy
                </Link>
                <Link
                  href="/learn-music"
                  className="block px-4 py-3 text-[#0f172a] font-semibold text-[15px] rounded-xl hover:bg-[#f1f5f9] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find A Teacher
                </Link>
                <Link
                  href="https://shop.muzigal.com/"
                  target="_blank"
                  className="block px-4 py-3 text-[#0f172a] font-semibold text-[15px] rounded-xl hover:bg-[#f1f5f9] transition-colors"
                >
                  Shop
                </Link>
              </nav>

              {/* Mobile Auth */}
              <div className="pt-4 border-t border-[#e2e8f0]">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 px-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e11d73] to-[#be185d] flex items-center justify-center">
                        <User size={18} className="text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0f172a] text-[15px]">{user.firstName}</p>
                        <p className="text-[12px] text-[#64748b]">Welcome back!</p>
                      </div>
                    </div>
                    <button
                      onClick={async () => { await logout(); setMobileMenuOpen(false); }}
                      className="w-full flex items-center justify-center gap-2 text-[#64748b] text-[14px] font-medium py-3 rounded-xl hover:bg-[#fef2f2] hover:text-[#e11d73] transition-all"
                    >
                      <LogOut size={16} />
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <button className="w-full bg-gradient-to-r from-[#e11d73] to-[#be185d] text-white py-3 rounded-xl font-semibold text-[15px]">
                      Login / Sign up
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;