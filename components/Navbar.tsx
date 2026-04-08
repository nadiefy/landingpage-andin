'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none">
        <motion.header
          className={`w-full max-w-7xl rounded-full transition-all duration-300 pointer-events-auto ${scrolled ? 'bg-black/40 backdrop-blur-[10px] border border-primary/10 py-3 px-6' : 'bg-transparent py-4 px-6'
            }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center z-50 overflow-visible">
              <Image
                src="/assets/pic/andinlogo-removebg.png"
                alt="Andin Transport Logo"
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
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-primary/80 hover:text-primary transition-colors relative group"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/10 scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"></span>
                </Link>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className={`hidden md:flex items-center gap-2 pl-5 pr-2 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${scrolled ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
              >
                Book Now
                <span className="w-6 h-6 rounded-full bg-foreground flex items-center justify-center text-primary">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </Link>

              <button
                className="md:hidden p-2 text-primary z-50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
            <nav className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-display font-medium text-primary/80 hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#get-started"
                className="mt-8 flex items-center gap-3 pl-8 pr-3 py-3 rounded-full text-lg font-medium bg-primary text-primary-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
                <span className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-primary">
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
