'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const SERVICES_DATA = [
  {
    title: "Flexible scheduling",
    desc: "Rates by the day, week, or month — aligned to your exact itinerary. Keep full control of your transport logistics with options tailored for executive transfers, production shoots, and luxury tour schedules.",
    image: "/assets/pic/services-section/scheduling.jpg"
  },
  {
    title: "Chauffeur services",
    desc: "Professional, vetted drivers and direct airport transfers, dispatched on request. Experience flawless hospitality, absolute discretion, and route optimization from our English-speaking, fully uniformed chauffeurs.",
    image: "/assets/pic/services-section/chauffeur.jpg"
  },
  {
    title: "Continuous support",
    desc: "Roadside response and concierge operations, active at any hour. A dedicated dispatch team is constantly monitoring our fleet to handle vehicle swaps, route alterations, or roadside support instantly.",
    image: "/assets/pic/services-section/support.jpg"
  }
];

function ImageCard({ service }: { service: typeof SERVICES_DATA[0] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
      <Image
        src={service.image}
        alt={service.title}
        fill
        unoptimized={false}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2 z-10">
        <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed mt-2">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleReplay = () => {
      setAnimationKey(prev => prev + 1);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href') === '#services') {
        handleReplay();
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#services') {
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

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black text-white scroll-mt-20 lg:scroll-mt-0" id="services">
      <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-white/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-zinc-400 font-sans">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none text-white">
            Services built for <span className="relative inline-block"><motion.span
                key={animationKey}
                className="absolute inset-x-0 -top-[0.15em] -bottom-[0.15em] bg-[#ec3237] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              /><span className="relative z-10">every journey</span></span>
          </h2>
        </motion.div>

        {/* Layout Grid: 3-column Image Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.map((service) => (
            <ImageCard key={service.title} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
