"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/sections/Header"), { ssr: false });
const Footer = dynamic(() => import("@/components/sections/Footer"), { ssr: false });
import { Search, MapPin, Phone, Star, ChevronRight } from "lucide-react";
import Image from "next/image";

const states = [
  "Andhra Pradesh", "Karnataka", "Kerala", "Maharashtra", "Tamil Nadu",
  "Telangana", "Delhi", "Gujarat", "Rajasthan", "West Bengal",
  "Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh", "Odisha",
];

const citiesByState: Record<string, string[]> = {
  "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"],
  "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem", "Trichy"],
  "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad"],
  "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar"],
  "Kerala": ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur"],
  "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore"],
  "Delhi": ["New Delhi", "Dwarka", "Rohini", "Saket", "Lajpat Nagar"],
  "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol"],
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Agra", "Varanasi", "Noida"],
  "Rajasthan": ["Jaipur", "Jodhpur", "Udaipur", "Kota"],
  "Punjab": ["Chandigarh", "Amritsar", "Ludhiana", "Jalandhar"],
  "Haryana": ["Gurugram", "Faridabad", "Hisar", "Panipat"],
  "Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur"],
  "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela"],
};

const areasByCity: Record<string, string[]> = {
  "Bangalore": ["Indiranagar", "Koramangala", "Whitefield", "Jayanagar", "HSR Layout", "Marathahalli", "BTM Layout", "Rajajinagar"],
  "Mumbai": ["Andheri", "Bandra", "Powai", "Thane", "Borivali", "Malad"],
  "Chennai": ["Anna Nagar", "T. Nagar", "Adyar", "Velachery", "Mylapore"],
  "Hyderabad": ["Banjara Hills", "Jubilee Hills", "Madhapur", "Gachibowli", "Kondapur"],
  "Pune": ["Koregaon Park", "Baner", "Kothrud", "Viman Nagar", "Hadapsar"],
  "Delhi": ["Saket", "Lajpat Nagar", "Dwarka", "Rohini", "Vasant Kunj"],
  "New Delhi": ["Saket", "Lajpat Nagar", "Dwarka", "Rohini", "Vasant Kunj"],
  "Kochi": ["Kakkanad", "Edapally", "Palarivattom", "Aluva"],
};

const academies = [
  {
    id: 1,
    name: "Muzigal Academy - Indiranagar",
    address: "1st Floor, 100 Feet Road, Indiranagar, Bangalore - 560038",
    area: "Indiranagar",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 98765 43210",
    rating: 4.8,
    reviews: 124,
    subjects: ["Guitar", "Piano", "Keyboard", "Vocals", "Drums"],
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
  },
  {
    id: 2,
    name: "Muzigal Academy - Koramangala",
    address: "3rd Cross, 5th Block, Koramangala, Bangalore - 560095",
    area: "Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 98765 43211",
    rating: 4.7,
    reviews: 98,
    subjects: ["Guitar", "Violin", "Piano", "Carnatic Vocals"],
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=400&q=80",
  },
  {
    id: 3,
    name: "Muzigal Academy - HSR Layout",
    address: "27th Main Road, Sector 2, HSR Layout, Bangalore - 560102",
    area: "HSR Layout",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 98765 43212",
    rating: 4.9,
    reviews: 156,
    subjects: ["Drums", "Guitar", "Piano", "Flute", "Tabla"],
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&q=80",
  },
  {
    id: 4,
    name: "Muzigal Academy - Anna Nagar",
    address: "42nd Street, 7th Avenue, Anna Nagar, Chennai - 600040",
    area: "Anna Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    phone: "+91 98765 43213",
    rating: 4.6,
    reviews: 87,
    subjects: ["Carnatic Vocals", "Violin", "Mrudangam", "Keyboard"],
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
  },
  {
    id: 5,
    name: "Muzigal Academy - Banjara Hills",
    address: "Road No. 12, Banjara Hills, Hyderabad - 500034",
    area: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    phone: "+91 98765 43214",
    rating: 4.8,
    reviews: 113,
    subjects: ["Guitar", "Piano", "Vocals", "Drums", "Saxophone"],
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80",
  },
  {
    id: 6,
    name: "Muzigal Academy - Koregaon Park",
    address: "Lane 5, Koregaon Park, Pune - 411001",
    area: "Koregaon Park",
    city: "Pune",
    state: "Maharashtra",
    phone: "+91 98765 43215",
    rating: 4.7,
    reviews: 92,
    subjects: ["Piano", "Guitar", "Keyboard", "Western Vocals"],
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80",
  },
];

export default function FindAnAcademyPage() {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [searched, setSearched] = useState(false);

  const cities = selectedState ? (citiesByState[selectedState] || []) : [];
  const areas = selectedCity ? (areasByCity[selectedCity] || []) : [];

  const filteredAcademies = academies.filter((a) => {
    if (selectedState && a.state !== selectedState) return false;
    if (selectedCity && a.city !== selectedCity) return false;
    if (selectedArea && a.area !== selectedArea) return false;
    return true;
  });

  const handleSearch = () => setSearched(true);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="bg-[#132742] text-white py-16 px-6">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-[36px] font-bold mb-3">Find a Muzigal Academy near you</h1>
          <p className="text-white/70 text-[16px] mb-10 max-w-xl mx-auto">
            Discover world-class music education at a Muzigal academy in your city
          </p>

          {/* Filter Bar */}
          <div className="bg-white rounded-xl p-4 flex flex-col md:flex-row items-center gap-3 max-w-[860px] mx-auto shadow-2xl">
            {/* State */}
            <div className="flex-1 w-full">
              <label className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider block mb-1 text-left pl-1">State</label>
              <select
                value={selectedState}
                onChange={(e) => { setSelectedState(e.target.value); setSelectedCity(""); setSelectedArea(""); setSearched(false); }}
                className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384] bg-white"
              >
                <option value="">Search by state</option>
                {states.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>

            <div className="hidden md:block w-px h-10 bg-[#e0e0e0]" />

            {/* City */}
            <div className="flex-1 w-full">
              <label className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider block mb-1 text-left pl-1">City</label>
              <select
                value={selectedCity}
                onChange={(e) => { setSelectedCity(e.target.value); setSelectedArea(""); setSearched(false); }}
                disabled={!selectedState}
                className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384] bg-white disabled:opacity-50"
              >
                <option value="">All Cities</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="hidden md:block w-px h-10 bg-[#e0e0e0]" />

            {/* Area */}
            <div className="flex-1 w-full">
              <label className="text-[11px] font-semibold text-[#6b7280] uppercase tracking-wider block mb-1 text-left pl-1">Area</label>
              <select
                value={selectedArea}
                onChange={(e) => { setSelectedArea(e.target.value); setSearched(false); }}
                disabled={!selectedCity}
                className="w-full border border-[#e0e0e0] rounded-lg px-3 py-2.5 text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384] bg-white disabled:opacity-50"
              >
                <option value="">All Areas</option>
                {areas.map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            {/* Search Button */}
            <button
              onClick={handleSearch}
              className="bg-[#d63384] hover:bg-[#b5296e] text-white font-semibold px-8 py-3 rounded-lg flex items-center gap-2 transition-colors mt-4 md:mt-5 w-full md:w-auto"
            >
              <Search size={16} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="flex-1 py-12 px-6 bg-[#f8f9fb]">
        <div className="max-w-[1200px] mx-auto">
          {searched || (!selectedState) ? (
            <>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-[22px] font-bold text-[#132742]">
                  {searched
                    ? filteredAcademies.length > 0
                      ? `${filteredAcademies.length} Academies Found`
                      : "No academies found"
                    : "All Academies"}
                </h2>
              </div>

              {filteredAcademies.length === 0 && searched ? (
                <div className="text-center py-20">
                  <div className="text-6xl mb-4">🏫</div>
                  <h3 className="text-[20px] font-bold text-[#132742] mb-2">No academies found</h3>
                  <p className="text-[#6b7280]">Try searching with a different area or city</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(searched ? filteredAcademies : academies).map((academy) => (
                    <AcademyCard key={academy.id} academy={academy} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <MapPin size={48} className="mx-auto text-[#d63384] mb-4" />
              <h3 className="text-[20px] font-bold text-[#132742] mb-2">Select filters to find an academy</h3>
              <p className="text-[#6b7280]">Choose your state, city and area to discover Muzigal academies near you</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#d63384] text-white py-12 px-6 text-center">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[28px] font-bold mb-3">Want to open a Muzigal Academy?</h2>
          <p className="text-white/80 mb-6">Join our growing network of franchise academies and bring music education to your community</p>
          <a href="#" className="inline-block bg-white text-[#d63384] font-bold px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Apply for Franchise
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function AcademyCard({ academy }: { academy: (typeof academies)[0] }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_24px_rgba(0,0,0,0.12)] transition-shadow group">
      <div className="relative h-[180px] overflow-hidden">
        <Image
          src={academy.image}
          alt={academy.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[16px] font-bold text-[#132742] mb-1">{academy.name}</h3>
        <div className="flex items-start gap-1.5 text-[13px] text-[#6b7280] mb-3">
          <MapPin size={13} className="mt-0.5 flex-shrink-0 text-[#d63384]" />
          <span>{academy.address}</span>
        </div>
        <div className="flex items-center gap-1 mb-3">
          <Star size={13} className="fill-[#f59e0b] text-[#f59e0b]" />
          <span className="text-[13px] font-semibold text-[#132742]">{academy.rating}</span>
          <span className="text-[13px] text-[#6b7280]">({academy.reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {academy.subjects.slice(0, 4).map((s) => (
            <span key={s} className="bg-[#f0f2f5] text-[#132742] text-[11px] font-medium px-2 py-0.5 rounded-full">
              {s}
            </span>
          ))}
          {academy.subjects.length > 4 && (
            <span className="bg-[#f0f2f5] text-[#6b7280] text-[11px] px-2 py-0.5 rounded-full">
              +{academy.subjects.length - 4} more
            </span>
          )}
        </div>
        <div className="flex items-center justify-between pt-3 border-t border-[#f0f2f5]">
          <a href={`tel:${academy.phone}`} className="flex items-center gap-1.5 text-[13px] text-[#6b7280] hover:text-[#d63384] transition-colors">
            <Phone size={13} />
            {academy.phone}
          </a>
          <a href="#" className="flex items-center gap-1 text-[#d63384] font-semibold text-[13px] hover:gap-2 transition-all">
            Enquire <ChevronRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
