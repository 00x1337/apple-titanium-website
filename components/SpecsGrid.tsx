"use client";
import React from 'react';
import { Camera, Cpu, BatteryCharging, Monitor } from 'lucide-react';

export default function SpecsGrid() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h3 className="text-3xl font-bold text-center mb-12">ابتكارات بلا حدود</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition">
          <Cpu className="w-8 h-8 text-amber-400 mb-4" />
          <h4 className="text-xl font-bold mb-2">A18 Pro</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            محرك عصبي أسرع بـ 16 نواة لتشغيل Apple Intelligence وتتبع الأشعة المسرّع بالعتاد.
          </p>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition">
          <Camera className="w-8 h-8 text-blue-400 mb-4" />
          <h4 className="text-xl font-bold mb-2">كاميرا 48MP Fusion</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            زر Camera Control التفاعلي الجديد كلياً مع تسجيل فيديو 4K Dolby Vision بسرعة 120 fps.
          </p>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition">
          <Monitor className="w-8 h-8 text-emerald-400 mb-4" />
          <h4 className="text-xl font-bold mb-2">ProMotion 120Hz</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            شاشة Super Retina XDR مع حواف هي الأعلى نحافة في أي منتج Apple على الإطلاق.
          </p>
        </div>

        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-6 hover:border-amber-500/40 transition">
          <BatteryCharging className="w-8 h-8 text-amber-500 mb-4" />
          <h4 className="text-xl font-bold mb-2">بطارية تدوم أكثر</h4>
          <p className="text-neutral-400 text-sm leading-relaxed">
            لغاية 33 ساعة من تشغيل الفيديو مع الشحن السريع اللاسلكي بقدرة تصل إلى 25W.
          </p>
        </div>
      </div>
    </section>
  );
}
