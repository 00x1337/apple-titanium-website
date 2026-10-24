"use client";
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ShieldAlert, CheckCircle, RefreshCw, Zap } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "هل الجيلبريك الحديث (Rootless) آمن ولا يضر النظام؟",
    answer: "نعم، آمن بنسبة 100%. الجيلبريك الحديث مبني بنظام Rootless؛ أي أنه لا يلمس أو يعدل أبداً على قسم ملفات النظام الأساسية (Root Partition)، بل ينشئ بيئة عمل مستقلة في مسار (/var/jb). وبالتالي يظل نظام الحماية الأصلي لجهازك سليماً ولا توجد أي فرصة لحصول Bootloop."
  },
  {
    question: "هل الجيلبريك يلغي ضمان Apple أو يمنعني من بيع الجهاز؟",
    answer: "لا، الجيلبريك شبه غير مقيد (Semi-Untethered). بمجرد إعادة تشغيل الهاتف (Reboot)، يعود الجهاز إلى وضعه المصنعي الأصلي تماماً دون أي أثر للجيلبريك. وإذا أردت حذفه نهائياً، بضغطة زر واحدة من داخل الأداة (Remove Jailbreak) يُحذف كل شيء في ثانية واحدة."
  },
  {
    question: "كيف يمكنني تشغيل تطبيقات البنوك وتطبيق توكلنا ونفاذ بدون مشاكل؟",
    answer: "عبر أداة Choicy أو Shadow أو vnodebypass المتوفرة في سورس Havoc و BigBoss. بمجرد تفعيل الخيار لتطبيق البنك، يتم حجب حقن ملفات الجيلبريك تماماً عن التطبيق فيعمل بكامل خصائصه دون أي إشعار أو تنبيه أمني."
  },
  {
    question: "هل أستطيع تثبيت الجيلبريك بدون كمبيوتر؟",
    answer: "نعم! إذا كان جهازك على إصدار مدعوم من TrollStore 2 (مثل iOS 15 إلى 16.6.1 و 17.0)، يمكنك تثبيت ملف TitaniumJB.ipa مباشرة وسيبقى شغالاً بشكل دائم بدون توقف ولا يحتاج لتجديد شهادة كل 7 أيام. كما يمكنك استخدام التثبيت المباشر عبر Safari."
  },
  {
    question: "ما الفرق بين متجر Cydia ومتجر Sileo؟",
    answer: "سيديا تم إيقاف تطويرها رسمياً منذ سنوات لأنها غير متوافقة مع معمارية 64-bit الحديثة ومعمارية Rootless. متجر Sileo هو البديل العصري؛ فائق السرعة، يدعم التحديثات الفورية، ويتعامل مع أحدث حزم dpkg و ElleKit بثبات تام."
  }
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-[#00ff88]" />
          <span>كل ما تود معرفته</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
          الأسئلة الشائعة حول الجيلبريك
        </h2>
        <p className="text-neutral-400 text-sm max-w-xl mx-auto font-light">
          إجابات وافية وشاملة للمفاهيم الأساسية، الأمان، وطرق الحماية وتجاوز كشف التطبيقات.
        </p>
      </div>

      <div className="space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-[#12141a] border border-white/10 rounded-2xl overflow-hidden transition"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full p-5 text-right flex items-center justify-between gap-4 font-semibold text-sm text-white hover:text-[#00ff88] transition cursor-pointer"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#00ff88]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 text-xs text-neutral-300 font-light leading-relaxed border-t border-white/5 pt-3 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
