import './globals.css';
import React from 'react';

export const metadata = {
  title: 'iPhone 16 Pro - Apple (SA)',
  description: 'Forged in Titanium. Powered by A18 Pro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black text-white antialiased selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
