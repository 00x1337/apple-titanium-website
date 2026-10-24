"use client";
import React from 'react';
import { Terminal, ShieldCheck, Download, Zap, Sparkles, CheckCircle2, ChevronDown, LockOpen, Cpu } from 'lucide-react';

export default function JailbreakHero() {
  return (
    <section className="relative pt-32 pb-16 px-4 overflow-hidden flex flex-col items-center text-center">
      {/* Background Glowing Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#00ff88]/15 via-[#00e5ff]/10 to-transparent blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[250px] bg-purple-600/10 blur-3xl rounded-full pointer-events-none" />

      {/* Hero Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(0,255,136,0.15)]">
        <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
        <span className="text-[#00ff88] font-semibold">الجيلبريك غير المقيد الأحدث</span>
        <span className="text-neutral-500">·</span>
        <span className="font-mono text-[11px] text-neutral-300">iOS 15.0 - 18.2 Support</span>
      </div>

      {/* Main Title */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-4xl leading-tight mb-6">
        تحرّر بالكامل مع <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00ff88] to-[#00e5ff]">
          Titanium Jailbreak
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
        أول أداة جيلبريك مطورة مبنية بمعمارية <strong>Rootless</strong> المتطورة لجميع أجهزة iPhone و iPad. ثبات استثنائي، أمان تام لحماية النظام، ودعم شامل لـ Sileo و TrollStore و ElleKit.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
        <a
          href="#simulator"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00ff88] to-[#00d470] hover:brightness-110 text-black font-bold text-sm transition shadow-[0_0_25px_rgba(0,255,136,0.35)] flex items-center gap-2"
        >
          <LockOpen className="w-4 h-4" />
          <span>بدء الجيلبريك المباشر</span>
        </a>
        <a
          href="#compatibility"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold text-sm border border-white/15 transition flex items-center gap-2"
        >
          <Cpu className="w-4 h-4 text-[#00e5ff]" />
          <span>فحص توافق إصدارك</span>
        </a>
      </div>

      {/* Feature Highlights Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full text-right">
        <div className="bg-[#12141a]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-[#00ff88]/30 transition group">
          <div className="w-8 h-8 rounded-xl bg-[#00ff88]/15 text-[#00ff88] flex items-center justify-center mb-2">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-white mb-1">أمان Rootless</h3>
          <p className="text-xs text-neutral-400 font-light">لا يعدل على ملفات النظام الأساسية، ويحافظ على أمان جهازك بالكامل.</p>
        </div>

        <div className="bg-[#12141a]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-[#00e5ff]/30 transition group">
          <div className="w-8 h-8 rounded-xl bg-[#00e5ff]/15 text-[#00e5ff] flex items-center justify-center mb-2">
            <Zap className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-white mb-1">سرعة واستقرار</h3>
          <p className="text-xs text-neutral-400 font-light">استهلاك بطارية شبه معدوم واستقرار يدوم لشهور دون إعادة تشغيل.</p>
        </div>

        <div className="bg-[#12141a]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-purple-400/30 transition group">
          <div className="w-8 h-8 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center mb-2">
            <Terminal className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-white mb-1">متجر Sileo</h3>
          <p className="text-xs text-neutral-400 font-light">تثبيت فوري لأحدث حزم وأدوات السيديا مع دعم حقن ElleKit الفوري.</p>
        </div>

        <div className="bg-[#12141a]/80 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-amber-400/30 transition group">
          <div className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center mb-2">
            <Download className="w-4 h-4" />
          </div>
          <h3 className="font-bold text-sm text-white mb-1">تثبيت بدون كمبيوتر</h3>
          <p className="text-xs text-neutral-400 font-light">دعم التثبيت الدائم عبر TrollStore 2 بدون الحاجة لتجديد كل 7 أيام.</p>
        </div>
      </div>
    </section>
  );
}
