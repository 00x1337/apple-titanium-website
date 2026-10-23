"use client";
import React, { useState } from 'react';
import { Sparkles, Camera } from 'lucide-react';

const colors = [
  {
    id: 'desert',
    name: 'تيتانيوم صحراوي',
    colorHex: '#c2a382',
    glowClass: 'glow-desert',
    badge: 'اللون الجديد',
    imageBg: 'from-amber-900/40 via-amber-950/20 to-black',
    accentBorder: 'border-amber-500/50'
  },
  {
    id: 'natural',
    name: 'تيتانيوم طبيعي',
    colorHex: '#9b948a',
    glowClass: 'glow-natural',
    badge: 'الأكثر طلباً',
    imageBg: 'from-stone-800/40 via-stone-900/20 to-black',
    accentBorder: 'border-stone-400/50'
  },
  {
    id: 'white',
    name: 'تيتانيوم أبيض',
    colorHex: '#e3e4e5',
    glowClass: 'glow-white',
    badge: 'كلاسيكي',
    imageBg: 'from-slate-700/30 via-slate-900/20 to-black',
    accentBorder: 'border-slate-300/50'
  },
  {
    id: 'black',
    name: 'تيتانيوم أسود',
    colorHex: '#2f3133',
    glowClass: 'glow-black',
    badge: 'فخم',
    imageBg: 'from-neutral-800/40 via-neutral-950/20 to-black',
    accentBorder: 'border-neutral-700/50'
  }
];

export default function ColorSelector() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-2">اختر لمستك الخاصة</h3>
        <p className="text-neutral-400 text-sm">التيتانيوم المقوى حرارياً برابطة جزيئية فائقة المتانة</p>
      </div>

      <div className={`relative rounded-3xl bg-gradient-to-b ${selectedColor.imageBg} border border-white/10 p-8 text-center transition-all duration-500 min-h-[420px] flex flex-col justify-between items-center`}>
        <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>{selectedColor.badge} - {selectedColor.name}</span>
        </div>

        <div className="my-8 relative group">
          <div className={`w-48 h-80 md:w-56 md:h-96 rounded-[48px] border-4 ${selectedColor.accentBorder} bg-neutral-950 shadow-2xl relative overflow-hidden transition-all duration-500 flex flex-col justify-between p-3`}>
            <div className="w-full h-full rounded-[40px] border border-white/10 relative overflow-hidden flex flex-col items-center justify-between p-4">
              <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end px-2 border border-white/5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 border border-neutral-700" />
              </div>

              <div 
                className="w-32 h-32 rounded-full blur-2xl opacity-60 transition-all duration-500" 
                style={{ backgroundColor: selectedColor.colorHex }}
              />

              <div className="text-center space-y-1">
                <Camera className="w-5 h-5 mx-auto text-neutral-400" />
                <span className="text-[10px] text-neutral-500 block">Camera Control</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 bg-black/60 backdrop-blur-xl px-6 py-3 rounded-full border border-white/10">
          {colors.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedColor(c)}
              className={`w-8 h-8 rounded-full transition-all flex items-center justify-center relative ${
                selectedColor.id === c.id ? 'ring-2 ring-white ring-offset-2 ring-offset-black scale-110' : 'hover:scale-105 opacity-80'
              }`}
              style={{ backgroundColor: c.colorHex }}
              title={c.name}
            >
              {selectedColor.id === c.id && (
                <span className="w-2 h-2 rounded-full bg-black/40" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
