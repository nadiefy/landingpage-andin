'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-primary/10 pt-16 pb-8 px-7 md:px-12 lg:px-20">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 mb-6">
              <span className="text-2xl font-display font-medium tracking-tight text-primary">
                Electric
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent-warm"></span>
            </Link>
            <p className="text-primary/60 max-w-sm">
              Experience the future of driving today. Premium electric car rental for those who refuse to settle.
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-6 text-primary">Company</h4>
            <ul className="space-y-4 text-primary/60 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-6 text-primary">Legal</h4>
            <ul className="space-y-4 text-primary/60 text-sm">
              <li><Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/10 text-primary/40 text-sm">
          <p suppressHydrationWarning>© {new Date().getFullYear()} Electric. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
