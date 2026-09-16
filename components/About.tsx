'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleReplay = () => {
      setAnimationKey(prev => prev + 1);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href') === '#about') {
        handleReplay();
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#about') {
        handleReplay();
      }
    };

    document.addEventListener('click', handleLinkClick);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.removeEventListener('click', handleLinkClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section className="w-full bg-black py-24 lg:py-32 scroll-mt-20 lg:scroll-mt-0" id="about">
      <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-primary/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Tentang Kami</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-tight mb-16 max-w-4xl text-white">
            Kenyamanan berkendara untuk{' '}
            <span className="relative inline-block">
              <motion.span
                key={animationKey}
                className="absolute inset-x-0 -top-[0.15em] -bottom-[0.15em] bg-[#ec3237] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="relative z-10">setiap agenda Anda</span>
            </span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                <Image src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=400&h=800" alt="Premium sports car" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
            <motion.div style={{ y: y2 }} className="space-y-6">
              <div className="relative h-56 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src="https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=400&h=800" alt="Luxury car interior" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <Image src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=400&h=800" alt="Sleek car exterior" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover opacity-80 mix-blend-luminosity" referrerPolicy="no-referrer" />
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 text-base md:text-lg text-primary/70 leading-relaxed max-w-prose"
          >
            <p>
              Kami memastikan proses sewa kendaraan berjalan mudah dan tepat waktu. Seluruh armada kami rawat secara berkala demi menjaga kenyamanan, performa, serta kebersihan kabin.
            </p>
            <p>
              Mulai dari pemesanan via WhatsApp hingga pengantaran unit ke lokasi Anda, tim kami menangani setiap detail dengan cermat untuk kelancaran perjalanan Anda.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
