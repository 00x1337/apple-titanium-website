"use client";
import React, { useState } from 'react';
import { Terminal, Shield, Download, Smartphone, Menu, X, Sparkles, Cpu, ExternalLink } from 'lucide-react';

export default function JailbreakNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#07080b]/85 backdrop-blur-xl border-b border-white/10 text-xs">
        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-6 space-x-reverse">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00ff88]/20 to-[#00e5ff]/20 border border-[#00ff88]/40 flex items-center justify-center text-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.3)] group-hover:scale-105 transition-all">
                <Terminal className="w-4 h-4" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wide text-white flex items-center gap-1.5">
                  Titanium<span className="text-[#00ff88]">JB</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-[#00ff88]/15 text-[#00ff88] border border-[#00ff88]/30">v2.4</span>
                </span>
                <span className="text-[10px] text-neutral-400 font-mono">iOS 15.0 - 18.2 Rootless</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6 space-x-reverse text-neutral-300 font-medium">
              <a href="#compatibility" className="hover:text-[#00ff88] transition">فحص التوافق</a>
              <a href="#simulator" className="hover:text-[#00ff88] transition">محاكي الجلبريك</a>
              <a href="#tweaks" className="hover:text-[#00ff88] transition">أفضل الأدوات والسورسات</a>
              <a href="#faq" className="hover:text-[#00ff88] transition">الأسئلة الشائعة</a>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3 space-x-reverse">
            <a
              href="#compatibility"
              className="px-3 py-1.5 rounded-full text-xs font-medium text-neutral-300 bg-white/5 hover:bg-white/10 border border-white/10 transition flex items-center gap-1.5"
            >
              <Cpu className="w-3.5 h-3.5 text-[#00e5ff]" />
              <span>فحص جهازي</span>
            </a>
            <a
              href="#simulator"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-black bg-[#00ff88] hover:bg-[#00e570] transition shadow-[0_0_15px_rgba(0,255,136,0.4)] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>تثبيت الجلبريك (IPA)</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 hover:text-white transition p-1"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden bg-[#0b0c10] border-b border-white/10 px-4 py-4 space-y-3">
            <a
              href="#compatibility"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-neutral-300 hover:text-[#00ff88] py-1"
            >
              🔍 فحص التوافق
            </a>
            <a
              href="#simulator"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-neutral-300 hover:text-[#00ff88] py-1"
            >
              ⚡ محاكي الجلبريك المباشر
            </a>
            <a
              href="#tweaks"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-neutral-300 hover:text-[#00ff88] py-1"
            >
              📦 الأدوات والسورسات
            </a>
            <a
              href="#faq"
              onClick={() => setIsOpen(false)}
              className="block text-sm text-neutral-300 hover:text-[#00ff88] py-1"
            >
              ❓ الأسئلة الشائعة
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
