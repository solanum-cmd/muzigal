"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, MapPin, Star, PlayCircle, BookOpen, Clock, X, SlidersHorizontal } from "lucide-react";
import { teachers, subjects, languages } from "@/lib/mockData";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

function LearnMusicContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams?.get("q") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedSubject, setSelectedSubject] = useState<string>("All Subjects");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("All Languages");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (initialQuery) setSearchQuery(initialQuery);
  }, [initialQuery]);

  const allSubjects = ["All Subjects", ...subjects];
  const allLanguages = ["All Languages", ...languages];

  const filteredTeachers = teachers.filter((teacher) => {
    const matchesSubject = selectedSubject === "All Subjects" || teacher.subjects.includes(selectedSubject);
    const matchesLanguage = selectedLanguage === "All Languages" || teacher.languages.includes(selectedLanguage);
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      teacher.name.toLowerCase().includes(searchLower) ||
      teacher.subjects.some(s => s.toLowerCase().includes(searchLower));
      
    return matchesSubject && matchesLanguage && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <Header />
      
      {/* Header Area */}
      <div className="bg-white border-b border-[#e2e8f0] pt-12 pb-8 sticky top-[72px] z-40 shadow-sm">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <h1 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-2 leading-tight">
                Find Your Perfect Teacher
              </h1>
              <p className="text-[#64748b] text-[15px]">
                {filteredTeachers.length} verified expert teachers available
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Mobile Filter Toggle */}
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center justify-center gap-2 bg-[#f1f5f9] text-[#0f172a] h-12 px-4 rounded-xl border border-[#e2e8f0] font-semibold text-[14px]"
              >
                <SlidersHorizontal size={16} />
                Filters
              </button>
              
              {/* Search */}
              <div className="relative flex-grow md:w-[320px]">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="Search teachers, subjects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 pl-11 pr-4 bg-[#f8fafc] border border-[#e2e8f0] rounded-xl text-[14px] text-[#0f172a] placeholder:text-[#94a3b8] focus:bg-white focus:border-[#e11d73] focus:ring-2 focus:ring-[#e11d73]/10 transition-all outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#94a3b8] hover:text-[#0f172a]"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Filters */}
          <div className={`flex flex-col md:flex-row gap-4 ${showFilters ? 'block' : 'hidden md:flex'}`}>
            <div className="flex-1 md:max-w-[240px]">
              <label className="block text-[12px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider">Subject</label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full h-11 px-4 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#0f172a] font-medium outline-none focus:border-[#e11d73] appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
              >
                {allSubjects.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            
            <div className="flex-1 md:max-w-[240px]">
              <label className="block text-[12px] font-semibold text-[#64748b] mb-1.5 uppercase tracking-wider">Language</label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full h-11 px-4 bg-white border border-[#e2e8f0] rounded-xl text-[14px] text-[#0f172a] font-medium outline-none focus:border-[#e11d73] appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2364748b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
              >
                {allLanguages.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="flex-1 py-10">
        <div className="container mx-auto px-6 max-w-[1200px]">
          {filteredTeachers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTeachers.map((teacher) => (
                <div 
                  key={teacher.id}
                  className="bg-white rounded-2xl border border-[#e2e8f0] shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_40px_rgba(225,29,115,0.08)] hover:border-[#fce7f3] transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex gap-4 mb-5 relative">
                      {/* Avatar */}
                      <div className="relative w-20 h-20 rounded-2xl overflow-hidden shrink-0 border border-[#e2e8f0] shadow-sm">
                        <Image
                          src={teacher.image}
                          alt={teacher.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      {/* Teacher Info */}
                      <div>
                        <div className="flex items-start justify-between">
                          <h3 className="text-[#0f172a] font-bold text-[18px] group-hover:text-[#e11d73] transition-colors">{teacher.name}</h3>
                          <div className="flex items-center gap-1 bg-[#fef3c7] text-[#b45309] px-2 py-0.5 rounded-full text-[12px] font-bold">
                            <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
                            {teacher.rating}
                          </div>
                        </div>
                        <p className="text-[#e11d73] text-[13px] font-semibold mt-1 uppercase tracking-wider">{teacher.subjects.join(", ")}</p>
                        <div className="flex items-center gap-1 text-[#64748b] text-[13px] mt-1.5">
                          <MapPin size={14} />
                          Online
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t border-[#f1f5f9]">
                      <div className="flex items-start gap-2 text-[13px]">
                        <BookOpen size={16} className="text-[#94a3b8] shrink-0 mt-0.5" />
                        <span className="text-[#334155] leading-relaxed"><span className="font-semibold text-[#0f172a]">Teaches:</span> {teacher.subjects.join(", ")}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[13px]">
                        <span className="text-[#94a3b8] shrink-0 mt-0.5 font-serif text-[16px] leading-none">A</span>
                        <span className="text-[#334155] leading-relaxed"><span className="font-semibold text-[#0f172a]">Speaks:</span> {teacher.languages.join(", ")}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[13px]">
                        <Clock size={16} className="text-[#94a3b8] shrink-0 mt-0.5" />
                        <span className="text-[#334155] leading-relaxed"><span className="font-semibold text-[#0f172a]">Experience:</span> {teacher.experience}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto bg-[#f8fafc] p-4 flex items-center justify-between border-t border-[#e2e8f0]">
                    <div className="flex flex-col">
                      <span className="text-[11px] text-[#64748b] font-semibold uppercase tracking-wider">Trial Class</span>
                      <span className="text-[18px] font-bold text-[#0f172a]">₹{teacher.price}</span>
                    </div>
                    <Link
                      href="#"
                      className="flex items-center gap-2 bg-[#0f172a] text-white px-5 py-2.5 rounded-xl text-[13px] font-bold hover:bg-[#e11d73] transition-colors"
                    >
                      <PlayCircle size={16} />
                      Book Trial
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-[#e2e8f0] p-16 flex flex-col items-center justify-center text-center shadow-sm max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-[#f1f5f9] rounded-full flex items-center justify-center mb-6">
                <Search size={32} className="text-[#94a3b8]" />
              </div>
              <h3 className="text-[20px] font-bold text-[#0f172a] mb-2">No teachers found</h3>
              <p className="text-[#64748b] text-[15px] max-w-[400px]">
                We couldn&apos;t find any teachers matching your criteria. Try adjusting your filters or search query.
              </p>
              <button 
                onClick={() => { setSearchQuery(""); setSelectedSubject("All Subjects"); setSelectedLanguage("All Languages"); }}
                className="mt-6 text-[#e11d73] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default function LearnMusic() {
  return (
    <React.Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#f8fafc]"><div className="w-8 h-8 border-4 border-[#e11d73] border-t-transparent rounded-full animate-spin" /></div>}>
      <LearnMusicContent />
    </React.Suspense>
  );
}
