import React from 'react';
import JailbreakNavbar from '@/components/JailbreakNavbar';
import JailbreakHero from '@/components/JailbreakHero';
import CompatibilityChecker from '@/components/CompatibilityChecker';
import LiveJailbreakSimulator from '@/components/LiveJailbreakSimulator';
import TweaksAndRepos from '@/components/TweaksAndRepos';
import FaqSection from '@/components/FaqSection';
import { Terminal, Shield, Github, Heart } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080b] text-white selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
      <JailbreakNavbar />
      <JailbreakHero />
      <CompatibilityChecker />
      <LiveJailbreakSimulator />
      <TweaksAndRepos />
      <FaqSection />

      {/* Global Footer */}
      <footer className="py-12 border-t border-white/10 text-center text-xs text-neutral-400 bg-[#090b0f]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-[#00ff88]/20 text-[#00ff88] flex items-center justify-center font-bold">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-white">TitaniumJB Project</span>
            <span className="text-neutral-500">·</span>
            <span>بني بحب وإتقان لمجتمع الجيلبريك العربي والعالمي</span>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <a
              href="https://github.com/00x1337/apple-titanium-website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>مستودع GitHub (@00x1337)</span>
            </a>
            <span className="text-neutral-600">|</span>
            <span className="text-neutral-500 font-mono">Next.js 14 App Router · Port 8080</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
