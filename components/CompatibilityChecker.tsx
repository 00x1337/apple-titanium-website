"use client";
import React, { useState } from 'react';
import { Smartphone, CheckCircle, AlertTriangle, XCircle, Download, ExternalLink, Sparkles, Cpu, Layers, HelpCircle } from 'lucide-react';

interface DeviceData {
  id: string;
  name: string;
  chip: string;
}

const DEVICES: DeviceData[] = [
  { id: 'ip16pro', name: 'iPhone 16 Pro / Pro Max', chip: 'Apple A18 Pro (ARM64e)' },
  { id: 'ip16', name: 'iPhone 16 / 16 Plus', chip: 'Apple A18 (ARM64e)' },
  { id: 'ip15pro', name: 'iPhone 15 Pro / Pro Max', chip: 'Apple A17 Pro (ARM64e)' },
  { id: 'ip15', name: 'iPhone 15 / 15 Plus', chip: 'Apple A16 Bionic (ARM64e)' },
  { id: 'ip14pro', name: 'iPhone 14 Pro / Pro Max', chip: 'Apple A16 Bionic (ARM64e)' },
  { id: 'ip14', name: 'iPhone 14 / 14 Plus', chip: 'Apple A15 Bionic (ARM64e)' },
  { id: 'ip13', name: 'iPhone 13 / 13 Pro', chip: 'Apple A15 Bionic (ARM64e)' },
  { id: 'ip12', name: 'iPhone 12 / 12 Pro', chip: 'Apple A14 Bionic (ARM64e)' },
  { id: 'ipad_m4', name: 'iPad Pro (M4)', chip: 'Apple M4 Chip (ARM64e)' },
  { id: 'ipx', name: 'iPhone X / 8 / 8 Plus', chip: 'Apple A11 (checkm8)' },
];

const IOS_VERSIONS = [
  'iOS 18.2 (Beta/Public)',
  'iOS 18.1',
  'iOS 18.0',
  'iOS 17.5.1',
  'iOS 17.0',
  'iOS 16.6.1',
  'iOS 16.5',
  'iOS 16.0',
  'iOS 15.4.1',
  'iOS 15.0',
];

export default function CompatibilityChecker() {
  const [selectedDevice, setSelectedDevice] = useState<string>('ip16pro');
  const [selectedVersion, setSelectedVersion] = useState<string>('iOS 18.0');

  const currentDevice = DEVICES.find((d) => d.id === selectedDevice) || DEVICES[0];

  // Logic to determine compatibility details based on device and iOS version
  const getCompatibilityReport = () => {
    if (selectedVersion.startsWith('iOS 15') || selectedVersion === 'iOS 16.0' || selectedVersion === 'iOS 16.5') {
      return {
        status: 'full',
        label: 'متوافق بالكامل (Full Semi-Untethered Jailbreak)',
        badgeColor: '#00ff88',
        toolName: 'TitaniumJB / Dopamine 2.x',
        exploit: 'kfd (Smith / PhysPuppet) + CoreTrust 2.0',
        packageManager: 'Sileo & Zebra مع ElleKit الكامل',
        installMethod: 'تثبيت دائم عبر TrollStore 2 بدون كمبيوتر (Permanently Signed)',
        canJailbreakNow: true
      };
    } else if (selectedVersion === 'iOS 16.6.1' || selectedVersion === 'iOS 17.0') {
      return {
        status: 'trollstore',
        label: 'يدعم TrollStore 2 وحقن الأدوات (Rootless Semi-JB)',
        badgeColor: '#00e5ff',
        toolName: 'Titanium Bootstrap + TrollStore 2',
        exploit: 'CoreTrust Bug + CT Bypass',
        packageManager: 'Sileo (Bootstrap Environment) مع حقن التطبيقات',
        installMethod: 'تثبيت مباشر عبر ملف IPA أو التوقيع المباشر',
        canJailbreakNow: true
      };
    } else if (selectedVersion === 'iOS 17.5.1' || selectedVersion === 'iOS 18.0') {
      return {
        status: 'webjb',
        label: 'يدعم جيلبريك WebClip التجريبي والمطور (Titanium Exploit)',
        badgeColor: '#a855f7',
        toolName: 'TitaniumJB Rootless v2.4 (Landa Kernel Exploit)',
        exploit: 'CVE-2024-44131 (Landa Memory Corruption) + PAC Bypass',
        packageManager: 'Sileo Nightly + WebClip Injector',
        installMethod: 'تثبيت عبر المحاكي المباشر أو تحميل ملف الـ IPA',
        canJailbreakNow: true
      };
    } else {
      return {
        status: 'semi',
        label: 'قيد التطوير النشط (Jailbreak in Development)',
        badgeColor: '#ffb703',
        toolName: 'Titanium Research Tool (kfree sandbox)',
        exploit: 'WebKit Exploit + Sandbox Escape In-Progress',
        packageManager: 'Sileo Preview',
        installMethod: 'احفظ جهازك على هذا الإصدار وتجنب التحديث لضمان كسر الحماية',
        canJailbreakNow: false
      };
    }
  };

  const report = getCompatibilityReport();

  return (
    <section id="compatibility" className="py-20 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-3">
          <Cpu className="w-3.5 h-3.5 text-[#00ff88]" />
          <span>المساعد الذكي لفحص التوافق</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          افحص جهازك وإصدار iOS الخاص بك
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
          اختر طراز جهازك وإصدار النظام لعرض أدوات الجيلبريك وثغرات الكيرنل (Kernel Exploits) المتوافقة فوراً.
        </p>
      </div>

      {/* Interactive Selectors Box */}
      <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 1. Device Picker */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-2 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#00ff88]" />
              <span>اختر جهاز الآيفون أو الآيباد:</span>
            </label>
            <select
              value={selectedDevice}
              onChange={(e) => setSelectedDevice(e.target.value)}
              className="w-full bg-[#181a22] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00ff88] transition cursor-pointer"
            >
              {DEVICES.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name} ({d.chip})
                </option>
              ))}
            </select>
          </div>

          {/* 2. iOS Version Picker */}
          <div>
            <label className="block text-xs font-semibold text-neutral-300 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#00e5ff]" />
              <span>اختر إصدار نظام iOS / iPadOS:</span>
            </label>
            <select
              value={selectedVersion}
              onChange={(e) => setSelectedVersion(e.target.value)}
              className="w-full bg-[#181a22] border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00e5ff] transition cursor-pointer"
            >
              {IOS_VERSIONS.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Compatibility Result Card */}
        <div className="rounded-2xl border border-white/10 bg-[#161820] p-6 text-right">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-5">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg"
                style={{ background: `${report.badgeColor}20`, color: report.badgeColor }}
              >
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base text-white">{currentDevice.name}</h4>
                <span className="text-xs text-neutral-400 font-mono">
                  {selectedVersion} · المعالج: {currentDevice.chip}
                </span>
              </div>
            </div>

            <div
              className="px-3.5 py-1.5 rounded-full text-xs font-bold font-mono tracking-wide"
              style={{ background: `${report.badgeColor}15`, color: report.badgeColor, border: `1px solid ${report.badgeColor}40` }}
            >
              {report.label}
            </div>
          </div>

          {/* Detailed Exploit Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
            <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-neutral-400 block mb-1">الأداة الموصى بها:</span>
              <span className="text-white font-semibold">{report.toolName}</span>
            </div>
            <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-neutral-400 block mb-1">ثغرة النواة المستخدمة (Kernel Exploit):</span>
              <span className="text-[#00ff88] font-mono font-medium">{report.exploit}</span>
            </div>
            <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-neutral-400 block mb-1">مدير الحزم (Package Manager):</span>
              <span className="text-white font-semibold">{report.packageManager}</span>
            </div>
            <div className="bg-black/30 p-3.5 rounded-xl border border-white/5">
              <span className="text-neutral-400 block mb-1">طريقة التثبيت:</span>
              <span className="text-neutral-200">{report.installMethod}</span>
            </div>
          </div>

          {/* Action Call to Action */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="text-xs text-neutral-400 font-light flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-neutral-500" />
              <span>الجلبريك لا يلغي الضمان، ويمكنك العودة للوضع الطبيعي بمجرد إعادة تشغيل الهاتف.</span>
            </div>
            <a
              href="#simulator"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00ff88] to-[#00d470] text-black font-bold text-xs hover:brightness-110 transition shadow-[0_0_20px_rgba(0,255,136,0.3)] flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>تشغيل أداة الجيلبريك لجهازي الآن</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
