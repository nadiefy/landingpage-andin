'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/assets/vids/hero-vids.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-7 md:px-12 lg:px-20 pt-32">
        <motion.div
          style={{ opacity }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[78px] font-display font-medium leading-[1.1] tracking-tight text-primary mb-10">
            Rent Your Dream Ride.<br />
            <span className="text-primary/90">Unlock Pure Luxury</span>
          </h1>
          
          <Link
            href="#fleet"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/20 hover:border-primary/50 text-primary font-medium transition-all duration-300 group"
          >
            View Fleet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
