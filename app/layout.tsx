import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css'; // Global styles

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Andin Transport - Sewa Mobil Mewah Surabaya & Pengemudi Profesional',
  description: 'Layanan rental mobil mewah dan pengemudi profesional di Surabaya. Toyota Alphard, HiAce Premio, Innova Zenix, Fortuner, dan Mercedes-Benz Sprinter.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-accent-warm selection:text-white" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
