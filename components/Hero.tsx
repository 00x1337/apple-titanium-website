"use client";
import React from 'react';
import { Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-36 pb-20 px-4 text-center relative overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-amber-700/20 via-yellow-600/10 to-transparent blur-3xl rounded-full pointer-events-none" />

      <h2 className="text-amber-500 font-semibold tracking-wide text-sm mb-2">iPhone 16 Pro</h2>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-4">
        مصنوع من التيتانيوم.
      </h1>
      <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-8 font-light">
        شريحة A18 Pro الخارقة. زر التحكم بالكاميرا الجديد. أقوى عمر بطارية في iPhone على الإطلاق.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-neutral-300">
        <div className="flex items-center gap-1.5 bg-neutral-900/80 px-4 py-2 rounded-full border border-white/10">
          <Cpu className="w-4 h-4 text-amber-400" />
          <span>شريحة A18 Pro المعمارية</span>
        </div>
        <div className="flex items-center gap-1.5 bg-neutral-900/80 px-4 py-2 rounded-full border border-white/10">
          <ShieldCheck className="w-4 h-4 text-neutral-400" />
          <span>تيتانيوم الدرجة 5</span>
        </div>
        <div className="flex items-center gap-1.5 bg-neutral-900/80 px-4 py-2 rounded-full border border-white/10">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>شحن أسرع بـ MagSafe</span>
        </div>
      </div>
    </section>
  );
}
