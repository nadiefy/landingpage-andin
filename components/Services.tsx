'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { CalendarBlank, UserCircleCheck, Headset } from '@phosphor-icons/react';
import { useRef } from 'react';

const features = [
  {
    icon: CalendarBlank,
    title: "Flexible scheduling",
    desc: "Rates by the day, week, or month — aligned to your exact itinerary."
  },
  {
    icon: UserCircleCheck,
    title: "Chauffeur services",
    desc: "Vetted drivers and direct airport transfers, dispatched on request."
  },
  {
    icon: Headset,
    title: "Continuous support",
    desc: "Roadside response and concierge ops, any hour."
  }
];

export function Services() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative w-full py-24 lg:py-32 overflow-hidden bg-black" id="services">
      {/* Video Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 scale-125"
      >
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Header & Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start text-left"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-xs font-semibold uppercase tracking-widest mb-8">
              Rental Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter leading-none mb-8">
              Services built for<br />
              <span className="text-primary/50">every journey</span>
            </h2>
            <p className="text-base md:text-lg text-primary/70 max-w-lg leading-relaxed">
              Transparent pricing, flexible pickup windows, and continuous roadside response — standard across the fleet.
            </p>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="flex flex-col gap-8">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-sm p-6 md:p-8 flex items-start gap-6 group transition-colors duration-300 hover:border-zinc-300 hover:bg-zinc-900"
              >
                <feature.icon className="w-6 h-6 text-zinc-300 shrink-0 mt-0.5" weight="regular" aria-hidden="true" />
                <div>
                  <h3 className="text-xl font-medium text-primary tracking-tighter mb-2">{feature.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
