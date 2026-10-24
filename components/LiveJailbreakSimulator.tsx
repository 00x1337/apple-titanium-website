"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, RotateCcw, CheckCircle2, Shield, Lock, Unlock, Download, Sparkles, AlertCircle } from 'lucide-react';

const JAILBREAK_LOGS = [
  { text: "[*] Initializing TitaniumJB v2.4 (ARM64e Exploit Engine)...", color: "#9ca3af", delay: 300 },
  { text: "[*] Identifying hardware: iPhone 16 Pro (A18 Pro / t8140) running iOS 18.0", color: "#38bdf8", delay: 600 },
  { text: "[+] Locating kernel base address (KASLR Slide: 0x24a00000)...", color: "#00ff88", delay: 900 },
  { text: "[*] Triggering CVE-2024-44131 memory corruption in IOHIDFamily...", color: "#fbbf24", delay: 1300 },
  { text: "[+] Kernel read/write primitives successfully established (tfp0 achieved)!", color: "#00ff88", delay: 1700 },
  { text: "[+] Bypassing Pointer Authentication Code (PAC) & PPL restrictions...", color: "#00ff88", delay: 2100 },
  { text: "[*] Escaping Apple Mobile File Integrity (AMFI) Sandbox...", color: "#a855f7", delay: 2500 },
  { text: "[+] Remounting rootless sandbox directory at /var/jb (Read/Write enabled)...", color: "#00ff88", delay: 2900 },
  { text: "[*] Injecting ElleKit v1.1 tweak injection framework...", color: "#38bdf8", delay: 3300 },
  { text: "[*] Extracting Sileo Modern Package Manager (org.coolstar.sileo)...", color: "#f43f5e", delay: 3700 },
  { text: "[+] Registering rootless Daemons (sshd, launchd hooks, dpkg)...", color: "#00ff88", delay: 4100 },
  { text: "[✔] JAILBREAK COMPLETED SUCCESSFULLY in 4.31s! System is now Rootless Jailbroken.", color: "#00ff88", delay: 4500 },
];

export default function LiveJailbreakSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState<Array<{ text: string; color: string }>>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [progress, setProgress] = useState(0);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  const startJailbreak = () => {
    setIsRunning(true);
    setLogs([]);
    setIsCompleted(false);
    setProgress(5);

    JAILBREAK_LOGS.forEach((item, index) => {
      setTimeout(() => {
        setLogs((prev) => [...prev, item]);
        setProgress(Math.round(((index + 1) / JAILBREAK_LOGS.length) * 100));

        if (index === JAILBREAK_LOGS.length - 1) {
          setIsRunning(false);
          setIsCompleted(true);
        }
      }, item.delay);
    });
  };

  const resetSimulator = () => {
    setIsRunning(false);
    setLogs([]);
    setIsCompleted(false);
    setProgress(0);
  };

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  return (
    <section id="simulator" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-3">
          <Terminal className="w-3.5 h-3.5 text-[#00ff88]" />
          <span>محاكي الجيلبريك المباشر (Live Web Exploit)</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          شاهد تنفيذ ثغرات النواة وحقن متجر Sileo
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
          اضغط على الزر أدناه لمحاكاة كسر حماية الـ iOS، وتجاوز طبقات الحماية (AMFI / PAC / PPL)، وتهيئة بيئة الـ Rootless بأمان.
        </p>
      </div>

      {/* Simulator Terminal Window */}
      <div className="bg-[#0b0d13] border border-white/15 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl">
        {/* Terminal Header */}
        <div className="bg-[#12151e] px-4 py-3 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            <span className="text-xs text-neutral-400 font-mono ml-2">titaniumjb_exploit_daemon</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono text-neutral-400">
              {isRunning ? 'جاري التنفيذ...' : isCompleted ? 'تم بنجاح (Rootless Active)' : 'جاهز للبدء'}
            </span>
            {isCompleted && (
              <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-ping" />
            )}
          </div>
        </div>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="w-full bg-white/5 h-1">
            <div
              className="bg-gradient-to-r from-[#00ff88] to-[#00e5ff] h-1 transition-all duration-300 shadow-[0_0_10px_#00ff88]"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Terminal Content Screen */}
        <div className="p-6 font-mono text-xs text-left min-h-[300px] max-h-[420px] overflow-y-auto space-y-2 bg-[#08090d]/90">
          {logs.length === 0 ? (
            <div className="h-48 flex flex-col items-center justify-center text-center text-neutral-500">
              <Terminal className="w-10 h-10 mb-3 text-neutral-600 animate-pulse" />
              <p className="text-sm font-sans font-medium text-neutral-400">اضغط على زر "بدء الجيلبريك" في الأسفل لبدء المحاكاة</p>
              <p className="text-xs text-neutral-600 mt-1">يتم فحص النواة وكسر الحماية وتثبيت Sileo في ثوانٍ معدودة</p>
            </div>
          ) : (
            logs.map((log, index) => (
              <div key={index} className="flex items-start gap-2 animate-fadeIn leading-relaxed">
                <span className="text-neutral-600 select-none">&gt;</span>
                <span style={{ color: log.color }}>{log.text}</span>
              </div>
            ))
          )}
          <div ref={terminalBottomRef} />
        </div>

        {/* Terminal Footer Controls */}
        <div className="bg-[#12151e] p-4 sm:p-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {!isRunning && !isCompleted ? (
              <button
                onClick={startJailbreak}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d470] text-black font-bold text-xs hover:brightness-110 transition shadow-[0_0_20px_rgba(0,255,136,0.35)] flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-black" />
                <span>بدء عملية الجيلبريك الآن (Jailbreak)</span>
              </button>
            ) : isCompleted ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-xs text-[#00ff88] font-bold">
                  <CheckCircle2 className="w-5 h-5 text-[#00ff88]" />
                  <span>تم تفعيل الجيلبريك بنجاح! متجر Sileo جاهز للاستخدام.</span>
                </div>
                <button
                  onClick={resetSimulator}
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs border border-white/10 transition flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>إعادة المحاكاة</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-[#00e5ff] font-mono">
                <div className="w-4 h-4 border-2 border-[#00e5ff] border-t-transparent rounded-full animate-spin" />
                <span>جاري كسر حماية الـ Sandbox وتجاوز الـ PPL... ({progress}%)</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/00x1337/apple-titanium-website"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 text-xs font-medium border border-white/10 transition flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5 text-[#00ff88]" />
              <span>تحميل TitaniumJB.ipa</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
