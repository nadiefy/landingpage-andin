'use client';

import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["0%", "40%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    shouldReduceMotion ? [1, 1] : [1, 0]
  );

  return (
    <section ref={ref} className="relative min-h-[100dvh] w-full flex items-center overflow-hidden">
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
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-6xl lg:text-[78px] font-display font-medium leading-[1.1] tracking-tighter text-balance text-primary mb-10">
            Premium Fleet. Professional Drivers.
          </h1>

          <Link
            href="#fleet"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/20 hover:border-primary/50 text-primary font-medium transition-transform transition-colors duration-300 active:scale-[0.98] group"
          >
            Explore Our Fleet
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" weight="regular" aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
