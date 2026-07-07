"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Navigation, Star, ChevronRight, X } from "lucide-react";
import { academies, citiesByState } from "@/lib/mockData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

function FindAcademyContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCity, setSelectedCity] = useState<string>("All Cities");
  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  
  const allCities = ["All Cities", ...Object.values(citiesByState).flat()];
  
  // Update search query when URL param changes
  useEffect(() => {
    if (initialQuery) setSearchQuery(initialQuery);
  }, [initialQuery]);

  const filteredAcademies = academies.filter((academy) => {
    const matchesCity = selectedCity === "All Cities" || academy.city === selectedCity;
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      academy.name.toLowerCase().includes(searchLower) ||
      academy.area.toLowerCase().includes(searchLower) ||
      academy.city.toLowerCase().includes(searchLower);
      
    return matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#0f172a] pt-24 pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('https://muzigal.com/images/academy-bg.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-[#1e293b]/60" />
        
        {/* Decorative Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e11d73]/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6 max-w-[1200px] text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#fce7f3] text-[13px] font-semibold tracking-wider mb-6">
            🏫 OFFLINE LEARNING
          </span>
          <h1 className="text-[36px] md:text-[52px] font-bold text-white mb-6 leading-tight tracking-tight">
            Find the perfect academy <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f472b6] to-[#e11d73]">
              near you
            </span>
          </h1>
          <p className="text-[#94a3b8] text-[16px] md:text-[18px] max-w-2xl mx-auto mb-12">
            Experience state-of-the-art infrastructure, expert teachers, and a comprehensive music curriculum at Muzigal Academies.
          </p>
          
          {/* Search & Filter Bar */}
          <div className="max-w-[800px] mx-auto bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2">
            {/* Location Selector */}
            <div className="relative md:w-1/3">
              <button 
                onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                className="w-full h-[52px] flex items-center justify-between px-4 bg-white rounded-xl text-[#0f172a] text-[15px] hover:bg-[#f1f5f9] transition-colors"
              >
                <div className="flex items-center gap-2 overflow-hidden">
                  <MapPin size={18} className="text-[#e11d73] shrink-0" />
                  <span className="font-semibold truncate">{selectedCity}</span>
                </div>
                <ChevronRight className={`w-4 h-4 text-[#64748b] transition-transform ${isCityDropdownOpen ? 'rotate-90' : ''}`} />
              </button>
              
              {isCityDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-xl shadow-xl border border-[#e2e8f0] max-h-[300px] overflow-y-auto z-50 p-1">
                  {allCities.map(city => (
                    <button
                      key={city}
                      onClick={() => { setSelectedCity(city); setIsCityDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-[14px] transition-colors ${
                        selectedCity === city 
                          ? 'bg-[#fce7f3] text-[#e11d73] font-semibold' 
                          : 'text-[#334155] hover:bg-[#f1f5f9]'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Search Input */}
            <div className="relative md:w-2/3 flex">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={18} className="text-[#94a3b8]" />
              </div>
              <input
                type="text"
                placeholder="Search by academy name or area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-[52px] pl-11 pr-4 bg-white rounded-xl text-[15px] text-[#0f172a] placeholder:text-[#94a3b8] outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-3 flex items-center text-[#94a3b8] hover:text-[#0f172a]"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="flex-1 -mt-16 relative z-20 pb-20">
        <div className="container mx-auto px-6 max-w-[1200px]">
          
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-[20px] font-bold text-[#0f172a]">
              {filteredAcademies.length} {filteredAcademies.length === 1 ? 'Academy' : 'Academies'} Found
            </h2>
            <div className="flex items-center gap-2 text-[#64748b] text-[14px] font-medium bg-white px-4 py-2 rounded-xl shadow-sm border border-[#e2e8f0]">
              <Navigation size={16} className="text-[#e11d73]" />
              Showing results for {selectedCity === "All Cities" ? "India" : selectedCity}
            </div>
          </div>
          
          {filteredAcademies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAcademies.map((academy) => (
                <div 
                  key={academy.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_40px_rgba(15,23,42,0.08)] hover:border-[#fce7f3] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={academy.image}
                      alt={academy.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-transparent to-transparent opacity-80" />
                    
                    {/* Floating Info */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[12px] font-bold text-[#0f172a] flex items-center gap-1 shadow-sm">
                      <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                      4.8
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-[18px] leading-snug line-clamp-2">
                        {academy.name}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin size={18} className="text-[#e11d73] shrink-0 mt-0.5" />
                      <p className="text-[#64748b] text-[14px] leading-relaxed line-clamp-2">
                        {academy.address}
                      </p>
                    </div>
                    
                    <div className="mt-auto grid grid-cols-2 gap-3">
                      <a 
                        href={`https://maps.google.com/?q=${encodeURIComponent(academy.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#f8fafc] text-[#0f172a] hover:bg-[#f1f5f9] font-semibold text-[13px] py-2.5 rounded-xl transition-colors border border-[#e2e8f0]"
                      >
                        <Navigation size={14} />
                        Get Directions
                      </a>
                      <Link 
                        href="#"
                        className="flex items-center justify-center gap-2 bg-[#fce7f3] text-[#e11d73] hover:bg-[#e11d73] hover:text-white font-bold text-[13px] py-2.5 rounded-xl transition-all"
                      >
                        Book Trial
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#e2e8f0] p-16 flex flex-col items-center justify-center text-center shadow-sm">
              <div className="w-20 h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
                <Search size={32} className="text-[#94a3b8]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0f172a] mb-2">No academies found</h3>
              <p className="text-[#64748b] text-[15px] max-w-[400px]">
                We couldn&apos;t find any academies matching &quot;<span className="font-semibold text-[#0f172a]">{searchQuery}</span>&quot; in {selectedCity}. 
                Try adjusting your search criteria.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedCity("All Cities"); }}
                className="mt-6 text-[#e11d73] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Franchise Banner Callout */}
      <section className="bg-white py-12 border-t border-[#e2e8f0]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute right-0 top-0 w-64 h-64 bg-[#e11d73] blur-[100px] opacity-20 rounded-full pointer-events-none" />
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-2">Want to start your own Academy?</h3>
              <p className="text-[#94a3b8] text-[15px]">Join India&apos;s fastest growing music education network.</p>
            </div>
            <a 
              href="https://landing.muzigal.com/mz/franchise"
              className="relative z-10 shrink-0 bg-white text-[#0f172a] px-8 py-3.5 rounded-xl font-bold text-[14px] hover:bg-[#f8fafc] hover:scale-105 transition-all shadow-[0_4px_20px_rgba(255,255,255,0.2)]"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function FindAcademy() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8fafc]"><div className="w-8 h-8 border-4 border-[#e11d73] border-t-transparent rounded-full animate-spin" /></div>}>
      <FindAcademyContent />
    </React.Suspense>
  );
}
