import './globals.css';
import React from 'react';

export const metadata = {
  title: 'TitaniumJB | جيلبريك آيفون المطور لجميع إصدارات iOS',
  description: 'أداة الجيلبريك الحديثة لـ iOS 15 - iOS 18. فحص التوافق، تثبيت TrollStore، وتحميل متجر Sileo وأحدث الأدوات.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-[#07080b] text-white antialiased selection:bg-[#00ff88]/30 selection:text-[#00ff88]">
        {children}
      </body>
    </html>
  );
}
