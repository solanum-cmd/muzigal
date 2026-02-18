"use client";

import React, { useState, useMemo } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Star, Filter, ChevronDown, Search, Clock, Globe, BookOpen, X } from "lucide-react";
import Image from "next/image";

const subjects = [
  "All Subjects", "Acoustic Guitar", "Electric Guitar", "Bass Guitar", "Violin",
  "Piano", "Keyboard", "Harmonium", "Ukulele", "Drums", "Tabla", "Mrudangam",
  "Western Vocal", "Carnatic Vocals", "Hindustani Vocals", "Flute", "Saxophone",
  "Trumpet", "Sitar", "Veena",
];

const languages = ["All Languages", "English", "Hindi", "Tamil", "Telugu", "Kannada", "Malayalam", "Bengali", "Marathi"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const teachers = [
  {
    id: 1,
    name: "Rahul Sharma",
    subjects: ["Acoustic Guitar", "Electric Guitar", "Bass Guitar"],
    languages: ["English", "Hindi"],
    level: ["Beginner", "Intermediate"],
    rating: 4.9,
    reviews: 142,
    experience: "8 years",
    price: "₹800/class",
    trialPrice: "Free",
    bio: "Professional guitarist with 8+ years of teaching experience. Trained from Trinity College of Music, London.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80",
    badges: ["Trinity Certified", "Top Rated"],
  },
  {
    id: 2,
    name: "Priya Nair",
    subjects: ["Piano", "Keyboard"],
    languages: ["English", "Malayalam", "Tamil"],
    level: ["Beginner", "Intermediate", "Advanced"],
    rating: 4.8,
    reviews: 118,
    experience: "10 years",
    price: "₹1000/class",
    trialPrice: "Free",
    bio: "ABRSM Grade 8 pianist with a decade of teaching students of all age groups.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    badges: ["ABRSM Certified", "Top Rated"],
  },
  {
    id: 3,
    name: "Amit Desai",
    subjects: ["Drums", "Tabla"],
    languages: ["English", "Hindi", "Marathi"],
    level: ["Beginner", "Intermediate"],
    rating: 4.7,
    reviews: 96,
    experience: "6 years",
    price: "₹750/class",
    trialPrice: "Free",
    bio: "Versatile percussionist adept at both Western drums and classical Tabla. Berklee alumnus.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
    badges: ["Berklee Alumnus"],
  },
  {
    id: 4,
    name: "Deepa Krishnan",
    subjects: ["Carnatic Vocals", "Western Vocal"],
    languages: ["Tamil", "English", "Telugu"],
    level: ["Beginner", "Intermediate", "Advanced"],
    rating: 4.9,
    reviews: 204,
    experience: "15 years",
    price: "₹900/class",
    trialPrice: "Free",
    bio: "Renowned Carnatic vocalist and A-grade artist of All India Radio with 15 years of teaching excellence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    badges: ["AIR A-Grade Artist", "Top Rated"],
  },
  {
    id: 5,
    name: "Sanjay Mehta",
    subjects: ["Violin", "Sitar"],
    languages: ["English", "Hindi", "Gujarati"],
    level: ["Beginner", "Intermediate"],
    rating: 4.6,
    reviews: 78,
    experience: "7 years",
    price: "₹850/class",
    trialPrice: "Free",
    bio: "Classical string musician trained under maestro Pandit Ravi Shankar's disciples.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
    badges: ["Classical Expert"],
  },
  {
    id: 6,
    name: "Meena Pillai",
    subjects: ["Flute", "Keyboard"],
    languages: ["Malayalam", "English", "Tamil"],
    level: ["Beginner", "Intermediate"],
    rating: 4.8,
    reviews: 89,
    experience: "9 years",
    price: "₹800/class",
    trialPrice: "Free",
    bio: "Classical and contemporary flute artist with extensive experience teaching online and offline.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&q=80",
    badges: ["Trinity Certified"],
  },
  {
    id: 7,
    name: "Kiran Rao",
    subjects: ["Acoustic Guitar", "Ukulele"],
    languages: ["Kannada", "English", "Hindi"],
    level: ["Beginner"],
    rating: 4.7,
    reviews: 65,
    experience: "4 years",
    price: "₹650/class",
    trialPrice: "Free",
    bio: "Specializes in beginner-friendly guitar lessons with a fun and engaging teaching style.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&q=80",
    badges: ["Beginner Specialist"],
  },
  {
    id: 8,
    name: "Ananya Singh",
    subjects: ["Hindustani Vocals", "Harmonium"],
    languages: ["Hindi", "English", "Bengali"],
    level: ["Beginner", "Intermediate", "Advanced"],
    rating: 4.9,
    reviews: 177,
    experience: "12 years",
    price: "₹950/class",
    trialPrice: "Free",
    bio: "Acclaimed Hindustani vocalist performing at prestigious sabhas across India and abroad.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
    badges: ["National Awardee", "Top Rated"],
  },
  {
    id: 9,
    name: "Vikram Nambiar",
    subjects: ["Mrudangam", "Tabla"],
    languages: ["Malayalam", "Tamil", "English"],
    level: ["Beginner", "Intermediate", "Advanced"],
    rating: 4.8,
    reviews: 103,
    experience: "11 years",
    price: "₹880/class",
    trialPrice: "Free",
    bio: "Senior Mrudangam artist trained in the Palakkad Mani Iyer tradition. Performed internationally.",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&q=80",
    badges: ["Palakkad Tradition"],
  },
];

export default function FindATeacherPage() {
  const [subjectFilter, setSubjectFilter] = useState("All Subjects");
  const [languageFilter, setLanguageFilter] = useState("All Languages");
  const [levelFilter, setLevelFilter] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return teachers.filter((t) => {
      if (subjectFilter !== "All Subjects" && !t.subjects.includes(subjectFilter)) return false;
      if (languageFilter !== "All Languages" && !t.languages.includes(languageFilter)) return false;
      if (levelFilter !== "All Levels" && !t.level.includes(levelFilter)) return false;
      if (searchQuery && !t.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !t.subjects.join(" ").toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [subjectFilter, languageFilter, levelFilter, searchQuery]);

  const activeFilters = [
    subjectFilter !== "All Subjects" && subjectFilter,
    languageFilter !== "All Languages" && languageFilter,
    levelFilter !== "All Levels" && levelFilter,
  ].filter(Boolean) as string[];

  const clearFilter = (f: string) => {
    if (subjects.includes(f)) setSubjectFilter("All Subjects");
    else if (languages.includes(f)) setLanguageFilter("All Languages");
    else if (levels.includes(f)) setLevelFilter("All Levels");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#132742] py-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h1 className="text-white text-[34px] font-bold mb-2 text-center">Find Your Perfect Music Teacher</h1>
          <p className="text-white/70 text-center mb-8 text-[16px]">
            Learn from 400+ verified teachers across instruments and genres
          </p>

          {/* Search */}
          <div className="max-w-[560px] mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Search by teacher name or instrument..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl text-[15px] text-white outline-none focus:ring-2 focus:ring-[#d63384]"
            />
          </div>
        </div>
      </section>

      {/* Filters Bar */}
      <div className="sticky top-[70px] z-40 bg-white border-b border-[#e0e0e0] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 border border-[#e0e0e0] rounded-lg px-4 py-2 text-[14px] font-semibold text-[#132742] hover:border-[#d63384] transition-colors"
          >
            <Filter size={15} />
            Filters
            {activeFilters.length > 0 && (
              <span className="bg-[#d63384] text-white text-[11px] w-5 h-5 rounded-full flex items-center justify-center">
                {activeFilters.length}
              </span>
            )}
          </button>

          {/* Subject Dropdown */}
          <div className="relative">
            <select
              value={subjectFilter}
              onChange={(e) => setSubjectFilter(e.target.value)}
              className="appearance-none border border-[#e0e0e0] rounded-lg pl-3 pr-8 py-2 text-[14px] text-[#132742] bg-white cursor-pointer hover:border-[#d63384] focus:outline-none focus:border-[#d63384]"
            >
              {subjects.map((s) => <option key={s}>{s}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
          </div>

          {/* Language Dropdown */}
          <div className="relative">
            <select
              value={languageFilter}
              onChange={(e) => setLanguageFilter(e.target.value)}
              className="appearance-none border border-[#e0e0e0] rounded-lg pl-3 pr-8 py-2 text-[14px] text-[#132742] bg-white cursor-pointer hover:border-[#d63384] focus:outline-none focus:border-[#d63384]"
            >
              {languages.map((l) => <option key={l}>{l}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
          </div>

          {/* Level Dropdown */}
          <div className="relative">
            <select
              value={levelFilter}
              onChange={(e) => setLevelFilter(e.target.value)}
              className="appearance-none border border-[#e0e0e0] rounded-lg pl-3 pr-8 py-2 text-[14px] text-[#132742] bg-white cursor-pointer hover:border-[#d63384] focus:outline-none focus:border-[#d63384]"
            >
              {levels.map((l) => <option key={l}>{l}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-2 top-1/2 -translate-y-1/2 text-[#6b7280] pointer-events-none" />
          </div>

          {/* Active filter chips */}
          {activeFilters.map((f) => (
            <span
              key={f}
              className="flex items-center gap-1 bg-[#fce4ef] text-[#d63384] text-[13px] font-medium px-3 py-1.5 rounded-full cursor-pointer"
              onClick={() => clearFilter(f)}
            >
              {f} <X size={12} />
            </span>
          ))}

          <span className="ml-auto text-[14px] text-[#6b7280]">{filtered.length} teacher{filtered.length !== 1 ? "s" : ""} found</span>
        </div>
      </div>

      {/* Teacher Grid */}
      <section className="flex-1 py-10 px-6 bg-[#f8f9fb]">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎵</div>
              <h3 className="text-[20px] font-bold text-[#132742] mb-2">No teachers found</h3>
              <p className="text-[#6b7280]">Try adjusting your filters or search query</p>
              <button
                onClick={() => { setSubjectFilter("All Subjects"); setLanguageFilter("All Languages"); setLevelFilter("All Levels"); setSearchQuery(""); }}
                className="mt-4 text-[#d63384] font-semibold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((t) => <TeacherCard key={t.id} teacher={t} />)}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function TeacherCard({ teacher }: { teacher: (typeof teachers)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.12)] transition-shadow">
      {/* Top Section */}
      <div className="p-5 flex gap-4">
        <div className="relative w-[72px] h-[72px] rounded-full overflow-hidden flex-shrink-0 ring-2 ring-[#fce4ef]">
          <Image src={teacher.image} alt={teacher.name} fill className="object-cover" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-[16px] font-bold text-[#132742] truncate">{teacher.name}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {teacher.subjects.slice(0, 2).map((s) => (
              <span key={s} className="text-[11px] bg-[#fce4ef] text-[#d63384] font-medium px-2 py-0.5 rounded-full">{s}</span>
            ))}
            {teacher.subjects.length > 2 && (
              <span className="text-[11px] text-[#6b7280] px-1">+{teacher.subjects.length - 2}</span>
            )}
          </div>
          <div className="flex items-center gap-1 mt-1.5">
            <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
            <span className="text-[13px] font-semibold text-[#132742]">{teacher.rating}</span>
            <span className="text-[12px] text-[#6b7280]">({teacher.reviews})</span>
          </div>
        </div>
      </div>

      {/* Badges */}
      {teacher.badges.length > 0 && (
        <div className="px-5 pb-2 flex flex-wrap gap-1.5">
          {teacher.badges.map((b) => (
            <span key={b} className="text-[11px] bg-[#f0f2f5] text-[#132742] font-medium px-2 py-0.5 rounded border border-[#e0e0e0]">{b}</span>
          ))}
        </div>
      )}

      {/* Bio */}
      <div className="px-5 pb-4">
        <p className="text-[13px] text-[#6b7280] leading-[1.5] line-clamp-2">{teacher.bio}</p>
      </div>

      {/* Meta */}
      <div className="px-5 pb-4 flex flex-wrap gap-x-4 gap-y-2">
        <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
          <Clock size={12} className="text-[#d63384]" />
          {teacher.experience} exp.
        </div>
        <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
          <Globe size={12} className="text-[#d63384]" />
          {teacher.languages.slice(0, 2).join(", ")}
        </div>
        <div className="flex items-center gap-1.5 text-[12px] text-[#6b7280]">
          <BookOpen size={12} className="text-[#d63384]" />
          {teacher.level.join(", ")}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#f0f2f5] px-5 py-4 flex items-center justify-between">
        <div>
          <span className="text-[14px] font-bold text-[#132742]">{teacher.price}</span>
          <span className="text-[12px] text-[#10b981] ml-2 font-medium">Trial: {teacher.trialPrice}</span>
        </div>
        <button className="bg-[#d63384] hover:bg-[#b5296e] text-white text-[13px] font-semibold px-4 py-2 rounded-lg transition-colors">
          Book Free Trial
        </button>
      </div>
    </div>
  );
}
