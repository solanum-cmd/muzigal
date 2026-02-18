"use client";

import React, { useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ShoppingCart, Star, Tag, Shield, Truck, RotateCcw, ChevronDown, X, Search } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Guitars", "Keyboards & Pianos", "Drums & Percussion", "Strings", "Wind Instruments", "Books & Accessories"];

const products = [
  {
    id: 1,
    name: "Fender FA-125CE Cutaway Acoustic-Electric Guitar",
    category: "Guitars",
    price: 18999,
    originalPrice: 24999,
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=400&q=80",
    badge: "Best Seller",
    badgeColor: "#d63384",
    teacherVerified: true,
    inStock: true,
    description: "Perfect for beginners and intermediate players. Solid spruce top, mahogany back and sides.",
  },
  {
    id: 2,
    name: "Yamaha P-45 Digital Piano 88 Keys",
    category: "Keyboards & Pianos",
    price: 34999,
    originalPrice: 42999,
    rating: 4.9,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&q=80",
    badge: "Teacher Recommended",
    badgeColor: "#132742",
    teacherVerified: true,
    inStock: true,
    description: "Weighted 88-key action with Pure CF Sound Generator. Ideal for serious learners.",
  },
  {
    id: 3,
    name: "Pearl Roadshow 5-Piece Drum Kit",
    category: "Drums & Percussion",
    price: 27500,
    originalPrice: 35000,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=400&q=80",
    badge: "Sale",
    badgeColor: "#ef4444",
    teacherVerified: false,
    inStock: true,
    description: "Complete starter drum kit with hardware pack and cymbals. Great value for money.",
  },
  {
    id: 4,
    name: "Casio CT-S300 Keyboard",
    category: "Keyboards & Pianos",
    price: 5499,
    originalPrice: 7499,
    rating: 4.5,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=80",
    badge: "Best Seller",
    badgeColor: "#d63384",
    teacherVerified: true,
    inStock: true,
    description: "61 keys, 400 tones, 77 rhythms. USB-MIDI connectivity included.",
  },
  {
    id: 5,
    name: "Stentor Student II Violin 4/4",
    category: "Strings",
    price: 9800,
    originalPrice: 13500,
    rating: 4.4,
    reviews: 55,
    image: "https://images.unsplash.com/photo-1514320291840-2e0a9af1c6c8?w=400&q=80",
    badge: "Quality Assured",
    badgeColor: "#10b981",
    teacherVerified: true,
    inStock: true,
    description: "Solid carved spruce top, solid maple back and sides. Ready to play.",
  },
  {
    id: 6,
    name: "Yamaha YFL-222 Flute",
    category: "Wind Instruments",
    price: 14500,
    originalPrice: 18000,
    rating: 4.8,
    reviews: 43,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&q=80",
    badge: "Teacher Recommended",
    badgeColor: "#132742",
    teacherVerified: true,
    inStock: false,
    description: "Closed-hole student flute with offset G. Perfect for beginners.",
  },
  {
    id: 7,
    name: "Guitar Learning Book - Hal Leonard",
    category: "Books & Accessories",
    price: 799,
    originalPrice: 1200,
    rating: 4.3,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1461360228754-6e81c478b882?w=400&q=80",
    badge: null,
    badgeColor: "",
    teacherVerified: false,
    inStock: true,
    description: "The world's best-selling guitar method. Includes access to online audio & video.",
  },
  {
    id: 8,
    name: "Fender Squier Affinity Stratocaster",
    category: "Guitars",
    price: 22999,
    originalPrice: 29999,
    rating: 4.7,
    reviews: 76,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    badge: "Sale",
    badgeColor: "#ef4444",
    teacherVerified: false,
    inStock: true,
    description: "Great beginner electric guitar with Fender tone. Comes with tremolo system.",
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cartCount, setCartCount] = useState(0);
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [ageVerified, setAgeVerified] = useState(false);
  const [showAgeModal, setShowAgeModal] = useState(true);

  const filtered = products.filter((p) => {
    if (selectedCategory !== "All" && p.category !== selectedCategory) return false;
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const handleAddToCart = (id: number) => {
    if (!addedIds.includes(id)) {
      setCartCount((c) => c + 1);
      setAddedIds((prev) => [...prev, id]);
    }
  };

  if (!ageVerified && showAgeModal) {
    return (
      <div className="fixed inset-0 bg-[#132742]/95 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-10 max-w-[420px] mx-6 text-center shadow-2xl">
          <Image src="https://muzigal.com/images/logo.svg" width={130} height={40} alt="Muzigal" className="mx-auto mb-6" />
          <h2 className="text-[24px] font-bold text-[#132742] mb-3">Age Verification</h2>
          <p className="text-[#6b7280] mb-8 text-[15px]">
            Are you 18 years old or older?<br />
            This shop sells musical instruments.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => { setAgeVerified(true); setShowAgeModal(false); }}
              className="flex-1 bg-[#d63384] hover:bg-[#b5296e] text-white font-bold py-3 rounded-xl transition-colors"
            >
              Yes, I am 18+
            </button>
            <button
              onClick={() => setShowAgeModal(false)}
              className="flex-1 border border-[#e0e0e0] text-[#132742] font-semibold py-3 rounded-xl hover:bg-[#f0f2f5] transition-colors"
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Top Banner */}
      <div className="bg-[#132742] text-white text-center py-2.5 text-[13px] font-medium">
        Free delivery on orders above ₹999 &nbsp;|&nbsp; Teacher-verified instruments &nbsp;|&nbsp; Easy returns
      </div>

      {/* Shop Hero */}
      <section className="bg-gradient-to-br from-[#1a0b2e] to-[#132742] text-white py-14 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-[36px] font-bold mb-3">Muzigal Shop</h1>
              <p className="text-white/70 text-[16px] max-w-md">
                Teacher-verified instruments and accessories curated for learners at every level
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-[13px] text-white/80">
                  <Shield size={15} className="text-[#d63384]" /> Quality Assured
                </div>
                <div className="flex items-center gap-2 text-[13px] text-white/80">
                  <Truck size={15} className="text-[#d63384]" /> Fast Delivery
                </div>
                <div className="flex items-center gap-2 text-[13px] text-white/80">
                  <RotateCcw size={15} className="text-[#d63384]" /> Easy Returns
                </div>
              </div>
            </div>
            {/* Cart Icon */}
            <div className="relative">
              <button className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 rounded-xl transition-colors">
                <ShoppingCart size={20} />
                <span className="font-semibold">Cart</span>
                {cartCount > 0 && (
                  <span className="bg-[#d63384] text-white text-[12px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter & Search */}
      <div className="sticky top-[70px] z-40 bg-white border-b border-[#e0e0e0] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex flex-wrap items-center gap-4">
          {/* Search */}
          <div className="relative flex-1 max-w-[280px]">
            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b7280]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 border border-[#e0e0e0] rounded-lg text-[14px] text-[#132742] focus:outline-none focus:border-[#d63384]"
            />
          </div>

          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[13px] font-medium px-3 py-1.5 rounded-full transition-all border ${
                  selectedCategory === cat
                    ? "bg-[#d63384] text-white border-[#d63384]"
                    : "bg-white text-[#132742] border-[#e0e0e0] hover:border-[#d63384]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <span className="ml-auto text-[13px] text-[#6b7280]">{filtered.length} products</span>
        </div>
      </div>

      {/* Products */}
      <section className="flex-1 py-10 px-6 bg-[#f8f9fb]">
        <div className="max-w-[1200px] mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎸</div>
              <h3 className="text-[20px] font-bold text-[#132742] mb-2">No products found</h3>
              <button onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }} className="text-[#d63384] font-semibold hover:underline">
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} added={addedIds.includes(p.id)} onAddToCart={() => handleAddToCart(p.id)} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProductCard({ product, added, onAddToCart }: {
  product: (typeof products)[0];
  added: boolean;
  onAddToCart: () => void;
}) {
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_10px_rgba(0,0,0,0.07)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow group">
      <div className="relative h-[200px] overflow-hidden bg-[#f8f9fb]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-white text-[11px] font-bold px-2 py-1 rounded"
            style={{ backgroundColor: product.badgeColor }}
          >
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="bg-[#6b7280] text-white text-[13px] font-bold px-3 py-1.5 rounded">Sold Out</span>
          </div>
        )}
        {product.teacherVerified && (
          <span className="absolute top-3 right-3 bg-white text-[10px] font-bold text-[#132742] px-2 py-0.5 rounded-full border border-[#e0e0e0] flex items-center gap-1">
            <Shield size={9} className="text-[#10b981]" /> Verified
          </span>
        )}
      </div>

      <div className="p-4">
        <span className="text-[11px] text-[#6b7280] font-medium">{product.category}</span>
        <h3 className="text-[14px] font-bold text-[#132742] mt-0.5 line-clamp-2 leading-[1.4]">{product.name}</h3>
        <p className="text-[12px] text-[#6b7280] mt-1 line-clamp-1">{product.description}</p>

        <div className="flex items-center gap-1 mt-2">
          <Star size={12} className="fill-[#f59e0b] text-[#f59e0b]" />
          <span className="text-[12px] font-semibold text-[#132742]">{product.rating}</span>
          <span className="text-[11px] text-[#6b7280]">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-[18px] font-bold text-[#132742]">₹{product.price.toLocaleString()}</span>
          <span className="text-[13px] text-[#6b7280] line-through">₹{product.originalPrice.toLocaleString()}</span>
          <span className="text-[12px] text-[#10b981] font-semibold">{discount}% off</span>
        </div>

        <button
          onClick={onAddToCart}
          disabled={!product.inStock || added}
          className={`w-full mt-3 py-2.5 rounded-lg text-[13px] font-semibold flex items-center justify-center gap-2 transition-all ${
            !product.inStock
              ? "bg-[#f0f2f5] text-[#6b7280] cursor-not-allowed"
              : added
              ? "bg-[#10b981] text-white cursor-default"
              : "bg-[#d63384] hover:bg-[#b5296e] text-white"
          }`}
        >
          <ShoppingCart size={14} />
          {!product.inStock ? "Out of Stock" : added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
