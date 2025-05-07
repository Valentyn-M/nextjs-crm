import React from 'react';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from '@/app/components/providers';

const font = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'TruScape CRM',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
