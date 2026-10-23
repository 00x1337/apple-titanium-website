"use client";
import React, { useState } from 'react';
import { Apple, ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10 text-xs">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
          <div className="flex items-center space-x-6 space-x-reverse">
            <a href="#" className="text-white hover:opacity-70 transition">
              <Apple className="w-4 h-4" />
            </a>
            <div className="hidden md:flex items-center space-x-6 space-x-reverse text-neutral-400">
              <a href="#" className="hover:text-white transition">المتجر</a>
              <a href="#" className="hover:text-white transition">Mac</a>
              <a href="#" className="hover:text-white transition">iPad</a>
              <a href="#" className="hover:text-white transition">iPhone</a>
              <a href="#" className="hover:text-white transition">Watch</a>
              <a href="#" className="hover:text-white transition">AirPods</a>
              <a href="#" className="hover:text-white transition">الدعم</a>
            </div>
          </div>
          <div className="flex items-center space-x-4 space-x-reverse">
            <button className="text-neutral-400 hover:text-white transition" title="سلة التسوق">
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-neutral-400 hover:text-white transition"
              title="القائمة"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Secondary Bar */}
      <div className="fixed top-12 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-white/10 text-sm">
        <div className="max-w-6xl mx-auto px-4 h-12 flex items-center justify-between">
          <span className="font-semibold text-lg text-white">iPhone 16 Pro</span>
          <div className="flex items-center space-x-4 space-x-reverse">
            <span className="hidden sm:inline text-xs text-neutral-400">ابتداءً من 4,699 ر.س</span>
            <a 
              href="#buy" 
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs px-3 py-1.5 rounded-full transition font-medium"
            >
              اطلب الآن
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
