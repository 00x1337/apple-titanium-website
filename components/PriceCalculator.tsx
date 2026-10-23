"use client";
import React, { useState } from 'react';
import { Check, ShoppingCart } from 'lucide-react';

const models = [
  { id: 'pro', name: 'iPhone 16 Pro', size: 'شاشة 6.3 إنش', basePrice: 4699 },
  { id: 'promax', name: 'iPhone 16 Pro Max', size: 'شاشة 6.9 إنش', basePrice: 5199 },
];

const storageOptions = [
  { size: '128GB', addPrice: 0 },
  { size: '256GB', addPrice: 400 },
  { size: '512GB', addPrice: 1200 },
  { size: '1TB', addPrice: 2000 },
];

export default function PriceCalculator() {
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [selectedStorage, setSelectedStorage] = useState(storageOptions[1]);

  const totalPrice = selectedModel.basePrice + selectedStorage.addPrice;

  return (
    <section id="buy" className="py-20 px-4 max-w-4xl mx-auto border-t border-white/10">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold mb-2">احسب سعرك واطلب الموديل المناسب</h3>
        <p className="text-neutral-400 text-sm">شامل ضريبة القيمة المضافة والشحن المجاني السريع</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div>
          <label className="block text-xs text-neutral-400 mb-3 font-semibold uppercase tracking-wider">1. اختر الطراز</label>
          <div className="space-y-3">
            {models.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedModel(m)}
                className={`w-full p-4 rounded-xl border text-right transition flex items-center justify-between ${
                  selectedModel.id === m.id 
                    ? 'border-blue-500 bg-blue-500/10 text-white' 
                    : 'border-white/10 bg-neutral-900/50 text-neutral-300 hover:border-white/30'
                }`}
              >
                <div>
                  <div className="font-bold">{m.name}</div>
                  <div className="text-xs text-neutral-400">{m.size}</div>
                </div>
                {selectedModel.id === m.id && <Check className="w-5 h-5 text-blue-400" />}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-xs text-neutral-400 mb-3 font-semibold uppercase tracking-wider">2. اختر السعة</label>
          <div className="grid grid-cols-2 gap-3">
            {storageOptions.map((s) => (
              <button
                key={s.size}
                onClick={() => setSelectedStorage(s)}
                className={`p-4 rounded-xl border text-center transition ${
                  selectedStorage.size === s.size 
                    ? 'border-blue-500 bg-blue-500/10 text-white font-bold' 
                    : 'border-white/10 bg-neutral-900/50 text-neutral-300 hover:border-white/30'
                }`}
              >
                <div className="text-lg">{s.size}</div>
                <div className="text-xs text-neutral-400 mt-1">
                  {s.addPrice === 0 ? 'شامل' : `+${s.addPrice} ر.س`}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-neutral-950 p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs text-neutral-400 block mb-1">المجموع الكلي المقدر:</span>
          <div className="text-3xl font-extrabold text-amber-400">
            {totalPrice.toLocaleString()} <span className="text-sm font-normal text-white">ر.س</span>
          </div>
          <span className="text-xs text-neutral-500 block mt-1">
            {selectedModel.name} - {selectedStorage.size}
          </span>
        </div>

        <button 
          onClick={() => alert(`تمت إضافة ${selectedModel.name} (${selectedStorage.size}) بسعر ${totalPrice} ر.س إلى سلة التسوق!`)}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white font-medium px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition shadow-lg shadow-blue-600/30"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>إتمام الطلب المسبق</span>
        </button>
      </div>
    </section>
  );
}
