'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { CalendarDays, UserCheck, Headset } from 'lucide-react';
import { useRef } from 'react';

const features = [
  {
    icon: CalendarDays,
    title: "Flexible scheduling",
    desc: "Daily, weekly, and monthly rates tailored to your itinerary."
  },
  {
    icon: UserCheck,
    title: "Chauffeur services",
    desc: "Professional drivers and airport transfers available upon request."
  },
  {
    icon: Headset,
    title: "24/7 premium support",
    desc: "Dedicated roadside assistance and concierge service around the clock."
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight mb-8">
              Tailored services for<br />
              <span className="text-primary/60">every single journey</span>
            </h2>
            <p className="text-base md:text-lg text-primary/70 max-w-lg leading-relaxed">
              Enjoy a hassle-free rental experience with transparent pricing, flexible pickup options, and 24/7 roadside assistance included with every premium vehicle.
            </p>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + (i * 0.15), ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex items-start gap-6 transition-colors group"
              >
                <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-accent-warm drop-shadow-[0_0_8px_#ec3237]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-primary mb-2">{feature.title}</h3>
                  <p className="text-primary/60 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
