import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
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
  title: 'Premium Car Rental',
  description: 'Premium car rental.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased selection:bg-accent-warm selection:text-white" suppressHydrationWarning>{children}</body>
    </html>
  );
}
