'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage, IndonesiaFlag, USAFlag } from '@/context/LanguageContext';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.fleet, href: '#fleet' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
        <motion.header
          className={`w-full max-w-7xl rounded-full transition-all duration-300 pointer-events-auto ${scrolled ? 'bg-black/40 backdrop-blur-[10px] border border-primary/10 py-3 px-5 sm:px-6' : 'bg-transparent py-4 px-5 sm:px-6'
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 overflow-visible" aria-label="Andin Transport Home">
              <Image
                src="/assets/pic/andinlogo-removebg.png"
                alt="Logo Andin Transport"
                width={400}
                height={120}
                className="h-8 md:h-10 w-auto object-contain scale-[1.2] md:scale-[1.3] origin-left"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/10 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Link>
              ))}
            </nav>

            {/* Right Controls: Language Toggle & CTA & Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Glassmorphic Language Toggle Switch (Desktop) */}
              <div
                role="group"
                aria-label={t.nav.langAria}
                className="hidden sm:flex items-center gap-0.5 bg-white/5 border border-white/10 backdrop-blur-md rounded-full p-1 text-xs shadow-inner shadow-black/20"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('id')}
                  aria-pressed={language === 'id'}
                  aria-label={t.nav.switchToId}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                    language === 'id'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <IndonesiaFlag className="w-4 h-3 rounded-[2px] ring-1 ring-black/10 shrink-0" />
                  <span>ID</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  aria-pressed={language === 'en'}
                  aria-label={t.nav.switchToEn}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors transition-transform duration-150 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
                    language === 'en'
                      ? 'bg-white text-black font-semibold shadow-sm'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <USAFlag className="w-4 h-3 rounded-[2px] ring-1 ring-black/10 shrink-0" />
                  <span>EN</span>
                </button>
              </div>

              {/* Primary CTA */}
              <Link
                href="#contact"
                className={`hidden md:flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-medium transition-colors transition-transform duration-200 active:scale-[0.96] ${scrolled ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
              >
                {t.nav.bookNow}
                <span className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center text-primary">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              {/* Mobile Menu Toggle Button */}
              <button
                className="md:hidden p-2 text-primary z-50 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 active:scale-[0.96] transition-transform"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-6"
          >
            {/* Mobile Language Switcher */}
            <div
              role="group"
              aria-label={t.nav.langAria}
              className="flex items-center gap-1 bg-white/10 border border-white/15 backdrop-blur-md rounded-full p-1 text-xs mb-8 shadow-inner shadow-black/30"
            >
              <button
                type="button"
                onClick={() => setLanguage('id')}
                aria-pressed={language === 'id'}
                aria-label={t.nav.switchToId}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors transition-transform duration-150 active:scale-[0.96] ${
                  language === 'id'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <IndonesiaFlag className="w-4 h-3 rounded-[2px] ring-1 ring-black/10 shrink-0" />
                <span>Indonesia</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                aria-label={t.nav.switchToEn}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors transition-transform duration-150 active:scale-[0.96] ${
                  language === 'en'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <USAFlag className="w-4 h-3 rounded-[2px] ring-1 ring-black/10 shrink-0" />
                <span>English</span>
              </button>
            </div>

            <nav className="flex flex-col items-center gap-7 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-2xl font-display font-medium text-primary/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="mt-6 flex items-center gap-3 pl-8 pr-3 py-3 rounded-full text-base font-medium bg-primary text-primary-foreground active:scale-[0.96] transition-transform"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav.bookNow}
                <span className="w-7 h-7 rounded-full bg-foreground flex items-center justify-center text-primary">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
