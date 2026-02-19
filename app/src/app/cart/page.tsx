"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Trash2, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CartPage() {
    const [cart, setCart] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const fetchCart = async () => {
        try {
            const res = await fetch('/api/cart');
            if (res.status === 401) {
                router.push('/login');
                return;
            }
            const data = await res.json();
            setCart(data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCart();
    }, []);

    const removeItem = async (productId: number) => {
        try {
            await fetch(`/api/cart?productId=${productId}`, { method: 'DELETE' });
            fetchCart();
        } catch (e) {
            console.error(e);
        }
    };

    if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

    const total = cart?.items?.reduce((acc: number, item: any) => acc + (item.price * item.quantity), 0) || 0;

    return (
        <div className="min-h-screen flex flex-col bg-[#f8f9fb]">
            <Header />

            <div className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-10">
                <h1 className="text-[28px] font-bold text-[#132742] mb-8 flex items-center gap-2">
                    <ShoppingCart /> Your Cart
                </h1>

                {(!cart || cart.items.length === 0) ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
                        <p className="text-[#6b7280]">Your cart is empty.</p>
                        <Link href="https://shop.muzigal.com/" target="_blank" className="text-[#d63384] hover:underline font-semibold mt-2 inline-block">Go to Shop</Link>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Cart Items */}
                        <div className="flex-1 space-y-4">
                            {cart.items.map((item: any) => (
                                <div key={item.productId} className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4">
                                    <div className="w-20 h-20 relative bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-[#132742] font-bold text-[15px]">{item.name}</h3>
                                        <p className="text-[#d63384] font-semibold mt-1">₹{item.price.toLocaleString()}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-medium">Qty: {item.quantity}</span>
                                        <button onClick={() => removeItem(item.productId)} className="text-red-500 hover:text-red-700 p-2">
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Summary */}
                        <div className="w-full lg:w-[320px]">
                            <div className="bg-white p-6 rounded-xl shadow-sm sticky top-[90px]">
                                <h3 className="text-[18px] font-bold text-[#132742] mb-4">Order Summary</h3>
                                <div className="space-y-2 mb-4 border-b border-[#e0e0e0] pb-4">
                                    <div className="flex justify-between text-[14px]">
                                        <span className="text-[#6b7280]">Subtotal</span>
                                        <span className="font-semibold text-[#132742]">₹{total.toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between text-[14px]">
                                        <span className="text-[#6b7280]">Delivery</span>
                                        <span className="text-[#10b981] font-semibold">Free</span>
                                    </div>
                                </div>
                                <div className="flex justify-between text-[16px] font-bold mb-6">
                                    <span className="text-[#132742]">Total</span>
                                    <span className="text-[#132742]">₹{total.toLocaleString()}</span>
                                </div>
                                <Link href="/payment">
                                    <button className="w-full bg-[#d63384] hover:bg-[#b5296e] text-white font-bold py-3 rounded-xl transition-colors">
                                        Checkout
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
}
