'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Image from 'next/image';

const SERVICES_DATA = [
  {
    id: "01",
    title: "Flexible scheduling",
    subtitle: "RATES BY THE DAY, WEEK, OR MONTH",
    desc: "Rates by the day, week, or month — aligned to your exact itinerary. Keep full control of your transport logistics with options tailored for executive transfers, production shoots, and luxury tour schedules.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Minimum Rental", value: "1 Day" },
      { label: "Pricing Model", value: "Daily / Weekly / Monthly" },
      { label: "Vehicle Control", value: "Self-Drive or Chauffeur" }
    ]
  },
  {
    id: "02",
    title: "Chauffeur services",
    subtitle: "PROFESSIONAL DISPATCH ON DEMAND",
    desc: "Professional, vetted drivers and direct airport transfers, dispatched on request. Experience flawless hospitality, absolute discretion, and route optimization from our English-speaking, fully uniformed chauffeurs.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Driver Level", value: "Certified Professional" },
      { label: "Languages", value: "English & Indonesian" },
      { label: "Service Area", value: "National Coverage" }
    ]
  },
  {
    id: "03",
    title: "Continuous support",
    subtitle: "24/7 ROADSIDE CONCIERGE & RESPONSE",
    desc: "Roadside response and concierge operations, active at any hour. A dedicated dispatch team is constantly monitoring our fleet to handle vehicle swaps, route alterations, or roadside support instantly.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Response Time", value: "< 30 Minutes" },
      { label: "Availability", value: "24 Hours / 7 Days" },
      { label: "Support Channels", value: "Direct Phone & WhatsApp" }
    ]
  }
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [detailsOpen, setDetailsOpen] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleTabHover = (index: number) => {
    setActiveIndex(index);
    setDetailsOpen(true);
  };

  const handleTabClick = (index: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (activeIndex === index) {
      if (isMobile) {
        setActiveIndex(null);

        // Auto-scroll back to section top when collapsing all items
        setTimeout(() => {
          const section = document.getElementById('services');
          if (section) {
            const navbarHeight = 80;
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: sectionPosition - navbarHeight,
              behavior: shouldReduceMotion ? 'auto' : 'smooth'
            });
          }
        }, 150);
      } else {
        setDetailsOpen(!detailsOpen);
      }
    } else {
      setActiveIndex(index);
      setDetailsOpen(true);

      if (isMobile) {
        setTimeout(() => {
          const element = itemRefs.current[index];
          if (element) {
            const navbarHeight = 80; // height of fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: shouldReduceMotion ? 'auto' : 'smooth'
            });
          }
        }, 150); // timeout to let motion height expand render
      }
    }
  };

  const safeActiveIndex = activeIndex ?? 0;

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black text-white scroll-mt-20 lg:scroll-mt-0" id="services">
      <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-white/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-zinc-400 font-sans">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter leading-none text-white">
            Services built for<br />
            <span className="text-zinc-500">every journey</span>
          </h2>
        </div>

        {/* Layout Grid: Desktop split-screen, Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Desktop typographic tabs) - Hidden on Mobile, Visible on LG */}
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-6">
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={service.id}
                  className="group relative cursor-pointer py-4"
                  onMouseEnter={() => handleTabHover(index)}
                  onClick={() => handleTabClick(index)}
                >
                  <div className="flex items-center gap-4">
                    {/* Active Warm Red Indicator */}
                    <div className="relative w-6 h-6 flex items-center justify-center">
                      {isActive && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute w-1.5 h-6 bg-[#ec3237]"
                          transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </div>

                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500 font-sans tracking-widest">
                        {service.id} /
                      </span>
                      <span
                        className={`text-2xl md:text-3xl font-display font-medium tracking-tight transition-all duration-300 ${
                          isActive
                            ? 'text-white scale-100'
                            : 'text-zinc-600 group-hover:text-zinc-300 scale-95 origin-left'
                        }`}
                      >
                        {service.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (Desktop Glassmorphic Showcase card) - Hidden on Mobile */}
          <div className="hidden lg:block lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
            {/* Background Image Showcase */}
            <div className="absolute inset-0 z-0">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={safeActiveIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.4, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={SERVICES_DATA[safeActiveIndex].image}
                    alt={SERVICES_DATA[safeActiveIndex].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 700px"
                    priority
                    className="object-cover"
                  />
                  {/* Subtle dark linear gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Showcase Overlay (Details panel) */}
            <AnimatePresence>
              {detailsOpen && (
                <motion.div
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-x-6 bottom-6 z-10 p-6 bg-zinc-950/70 border border-zinc-800/80 backdrop-blur-md rounded-none flex flex-col gap-4 max-w-lg"
                >
                  <div>
                    <span className="text-[10px] font-semibold text-[#ec3237] uppercase tracking-widest block mb-1 font-sans">
                      {SERVICES_DATA[safeActiveIndex].subtitle}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-tight">
                      {SERVICES_DATA[safeActiveIndex].title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                    {SERVICES_DATA[safeActiveIndex].desc}
                  </p>

                  {/* Specifications Table */}
                  <div className="border-t border-zinc-800/80 pt-4 mt-2">
                    <h4 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3 font-sans">
                      Specifications
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {SERVICES_DATA[safeActiveIndex].specs.map((spec, i) => (
                        <div key={i} className="flex justify-between text-xs py-1 border-b border-zinc-900/50 last:border-0 font-sans">
                          <span className="text-zinc-500">{spec.label}</span>
                          <span className="text-zinc-200 font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Layout (Vertical Accordion) - Visible on Mobile/Tablet, Hidden on LG */}
          <div className="flex lg:hidden flex-col gap-4 col-span-1">
            {SERVICES_DATA.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  ref={(el) => { itemRefs.current[index] = el; }}
                  key={service.id}
                  className={`relative overflow-hidden transition-all duration-300 rounded-none ${
                    isActive ? 'bg-zinc-900/40' : 'bg-transparent'
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => handleTabClick(index)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#ec3237]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-zinc-500 font-sans font-medium">
                        {service.id} /
                      </span>
                      <h3
                        className={`text-lg md:text-xl font-display font-medium tracking-tight transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-zinc-400'
                        }`}
                      >
                        {service.title}
                      </h3>
                    </div>
                  </button>

                  {/* Accordion Content */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key={service.id}
                        initial={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { height: 'auto', opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 100, damping: 20 }}
                        className="overflow-hidden"
                      >
                        <div className="mx-6 mb-6 p-6 flex flex-col gap-6 bg-white/[0.02] backdrop-blur-md border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] shadow-2xl shadow-black/60">
                          {/* Image */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" }}
                            className="relative aspect-[5/2] w-full overflow-hidden"
                          >
                            <Image
                              src={service.image}
                              alt={service.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 500px"
                              className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                          </motion.div>

                          {/* Description */}
                          <div>
                            <span className="text-[9px] font-semibold text-[#ec3237] uppercase tracking-widest block mb-1 font-sans">
                              {service.subtitle}
                            </span>
                            <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                              {service.desc}
                            </p>
                          </div>

                          {/* Specs Table */}
                          <div className="pt-2">
                            <h4 className="text-[9px] font-semibold text-zinc-500 uppercase tracking-widest mb-3 font-sans">
                              Specifications
                            </h4>
                            <div className="grid grid-cols-1 divide-y divide-zinc-800/10">
                              {service.specs.map((spec, i) => (
                                <div key={i} className="flex justify-between text-xs py-2 font-sans">
                                  <span className="text-zinc-500">{spec.label}</span>
                                  <span className="text-zinc-200 font-medium">{spec.value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
