import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ColorSelector from '@/components/ColorSelector';
import SpecsGrid from '@/components/SpecsGrid';
import PriceCalculator from '@/components/PriceCalculator';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-amber-500/30">
      <Navbar />
      <Hero />
      <ColorSelector />
      <SpecsGrid />
      <PriceCalculator />
      <footer className="py-8 border-t border-white/10 text-center text-xs text-neutral-500">
        حقوق الطبع والنشر © 2025 Apple Inc. جميع الحقوق محفوظة. مشروع Next.js App Router متكامل.
      </footer>
    </main>
  );
}
