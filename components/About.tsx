'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="w-full bg-black py-24 lg:py-32" id="about">
      <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-6 bg-primary/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-16 max-w-4xl">
            Why You Should Rent Your<br />
            <span className="text-primary/50">Next Vehicle With Us</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div 
            className="grid grid-cols-2 gap-6 items-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div style={{ y: y1 }} className="space-y-6">
              <div className="relative h-72 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400&h=800" alt="Premium sports car" fill className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="space-y-6">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=400&h=800" alt="Luxury car interior" fill className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400&h=800" alt="Sleek car exterior" fill className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-lg md:text-xl text-primary/70 leading-relaxed"
          >
            <p>
              We believe that renting a car shouldn't be a hassle. Our premium fleet is meticulously curated to offer vehicles that provide the ultimate comfort, performance, and style for any occasion.
            </p>
            <p>
              From seamless online booking to white-glove delivery service, every detail is crafted to elevate your journey. Whether you're navigating city streets for a business meeting or embarking on a cross-country road trip, we deliver an uncompromising experience.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
