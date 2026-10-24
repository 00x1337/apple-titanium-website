"use client";
import React, { useState } from 'react';
import { Package, Copy, Check, ExternalLink, Sparkles, Smartphone, Shield, PhoneCall, Lock, Palette, MessageSquare } from 'lucide-react';

interface Tweak {
  id: string;
  name: string;
  developer: string;
  description: string;
  category: string;
  iconBg: string;
  icon: React.ReactNode;
  compatible: string;
}

const TOP_TWEAKS: Tweak[] = [
  {
    id: 'dynamic-island',
    name: 'Dynamic Island Pro',
    developer: 'Elias Sfeir',
    description: 'جلب الجزيرة التفاعلية (Dynamic Island) والإشعارات الحية لكافة أجهزة الآيفون مع تخصيصات غير محدودة.',
    category: 'نظام وواجهة',
    iconBg: '#00ff88',
    icon: <Sparkles className="w-5 h-5 text-black" />,
    compatible: 'iOS 15.0 - 18.2'
  },
  {
    id: 'bioprotect',
    name: 'BioProtect XS',
    developer: 'Elias Limneos',
    description: 'قفل التطبيقات والمجلدات والإعدادات ببصمة الوجه (Face ID) أو البصمة بأمان متناهي.',
    category: 'أمان وخصوصية',
    iconBg: '#00e5ff',
    icon: <Lock className="w-5 h-5 text-black" />,
    compatible: 'iOS 15.0 - 18.2'
  },
  {
    id: 'callbar',
    name: 'CallBar XS',
    developer: 'Elias Limneos',
    description: 'واجهة اتصالات مدمجة في أعلى الشاشة لا تقاطع استخدامك للتطبيقات أو الألعاب أثناء الرنين.',
    category: 'تخصيص',
    iconBg: '#ff2a55',
    icon: <PhoneCall className="w-5 h-5 text-white" />,
    compatible: 'iOS 15.0 - 18.2'
  },
  {
    id: 'snowboard',
    name: 'SnowBoard',
    developer: 'SparkDev',
    description: 'محرك الثيمات الأسطوري لتغيير شكل الأيقونات، الخطوط، وأصوات النظام بدون استهلاك للبطارية.',
    category: 'ثيمات ومظهر',
    iconBg: '#a855f7',
    icon: <Palette className="w-5 h-5 text-white" />,
    compatible: 'iOS 15.0 - 18.2'
  },
  {
    id: 'watusi',
    name: 'Watusi 3 for WhatsApp',
    developer: 'Fouad Raheb',
    description: 'تجميد آخر ظهور، إخفاء مؤشرات قراءة الرسائل والصوتيات، وحفظ الحالات وتأمين المحادثات.',
    category: 'تواصل اجتماعي',
    iconBg: '#10b981',
    icon: <MessageSquare className="w-5 h-5 text-black" />,
    compatible: 'iOS 15.0 - 18.2'
  },
  {
    id: 'choicy',
    name: 'Choicy (Bank Bypass)',
    developer: 'Opa334',
    description: 'تجاوز كشف الجيلبريك لتطبيقات البنوك والجهات الحكومية ومنع حقن الحزم داخلها بذكاء.',
    category: 'حماية وتجاوز',
    iconBg: '#f59e0b',
    icon: <Shield className="w-5 h-5 text-black" />,
    compatible: 'iOS 15.0 - 18.2'
  }
];

const REPOSITORIES = [
  { name: 'Havoc Repo', url: 'https://havoc.app', description: 'أكبر متجر للأدوات الحديثة والمدفوعة والمجانية' },
  { name: 'Chariz Repo', url: 'https://repo.chariz.com', description: 'السورس الرسمي لأدوات مطوري iOS الرواد' },
  { name: 'BigBoss Official', url: 'http://apt.thebigboss.org/repofiles/cydia', description: 'أقدم وأشمل سورس للأدوات الكلاسيكية والحديثة' },
  { name: 'SparkDev Repository', url: 'https://sparkdev.me', description: 'مطور SnowBoard والأدوات الجمالية المميزة' },
  { name: 'Limneos Repo', url: 'https://limneos.net/repo', description: 'مطور CallBar و BioProtect و AnsweringMachine' },
];

export default function TweaksAndRepos() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);

  const handleCopyRepo = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <section id="tweaks" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-3">
          <Package className="w-3.5 h-3.5 text-[#00ff88]" />
          <span>المكتبة الشاملة للجيلبريك</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          أقوى أدوات وسورسات الجيلبريك الحديثة
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
          جميع الأدوات متوافقة بنسبة 100% مع معمارية Rootless و ElleKit وتعمل بسلاسة تامة دون استنزاف للبطارية.
        </p>
      </div>

      {/* Tweaks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {TOP_TWEAKS.map((tweak) => (
          <div
            key={tweak.id}
            className="bg-[#12141a] border border-white/10 rounded-2xl p-5 hover:border-[#00ff88]/40 transition group hover:shadow-[0_0_20px_rgba(0,255,136,0.12)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold shadow-md"
                  style={{ background: tweak.iconBg }}
                >
                  {tweak.icon}
                </div>
                <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-neutral-400">
                  {tweak.category}
                </span>
              </div>

              <h4 className="font-bold text-base text-white group-hover:text-[#00ff88] transition mb-1">
                {tweak.name}
              </h4>
              <span className="text-xs text-neutral-500 block mb-2 font-mono">بواسطة: {tweak.developer}</span>
              <p className="text-xs text-neutral-400 leading-relaxed font-light mb-4">
                {tweak.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span className="text-[#00ff88]">{tweak.compatible}</span>
              <span className="text-neutral-500">Rootless ElleKit</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Repositories Box */}
      <div className="bg-[#12141a] border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-xl">
        <h3 className="font-bold text-lg text-white mb-2 flex items-center gap-2">
          <span>أهم السورسات الرسمية (Sileo / Zebra Sources)</span>
          <span className="text-xs font-normal text-neutral-400 font-mono">اضغط لنسخ الرابط وإضافته فوراً</span>
        </h3>
        <p className="text-xs text-neutral-400 mb-6 font-light">
          يمكنك نسخ أي سورس وإضافته بضغطة زر واحدة داخل متجر Sileo أو Zebra لتحميل مئات الأدوات المحدثة.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {REPOSITORIES.map((repo) => {
            const isCopied = copiedUrl === repo.url;
            return (
              <div
                key={repo.name}
                onClick={() => handleCopyRepo(repo.url)}
                className="bg-[#181a22] hover:bg-[#1e212b] border border-white/10 hover:border-[#00ff88]/50 p-4 rounded-xl cursor-pointer transition flex items-center justify-between group"
              >
                <div className="min-w-0 pr-2">
                  <span className="font-semibold text-xs text-white block truncate group-hover:text-[#00ff88] transition">
                    {repo.name}
                  </span>
                  <span className="text-[10px] text-neutral-400 font-mono block truncate mt-0.5">
                    {repo.url}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition ${
                    isCopied ? 'bg-[#00ff88] text-black font-bold' : 'bg-white/5 text-neutral-400 group-hover:text-white'
                  }`}
                  title="نسخ السورس"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
