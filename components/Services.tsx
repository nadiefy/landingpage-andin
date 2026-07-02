'use client';

import { motion, useMotionValue, useMotionTemplate } from 'motion/react';

const SERVICES_DATA = [
  {
    id: "01",
    title: "Flexible scheduling",
    subtitle: "Flexible daily or monthly rates",
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
    subtitle: "Professional chauffeurs on call",
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
    subtitle: "Roadside help around the clock",
    desc: "Roadside response and concierge operations, active at any hour. A dedicated dispatch team is constantly monitoring our fleet to handle vehicle swaps, route alterations, or roadside support instantly.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Response Time", value: "< 30 Minutes" },
      { label: "Availability", value: "24 Hours / 7 Days" },
      { label: "Support Channels", value: "Direct Phone & WhatsApp" }
    ]
  }
];

function SpotlightCard({ service }: { service: typeof SERVICES_DATA[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const getTag = (id: string) => {
    switch (id) {
      case "01": return "RATES";
      case "02": return "CHAUFFEUR";
      case "03": return "SUPPORT";
      default: return "";
    }
  };

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl p-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] shadow-2xl shadow-black/80 transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 hidden sm:block motion-reduce:hidden"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.06),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full gap-4">
        <span className="text-[10px] font-semibold text-[#ec3237] uppercase tracking-widest block font-sans">
          {service.id} / {getTag(service.id)}
        </span>
        <h3 className="text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-tight">
          {service.title}
        </h3>
        <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-2">
          {service.desc}
        </p>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black text-white scroll-mt-20 lg:scroll-mt-0" id="services">
      <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-white/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-zinc-400 font-sans">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none text-white">
            Services built for<br />
            <span className="text-zinc-500">every journey</span>
          </h2>
        </div>

        {/* Layout Grid: 3-column Bento style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DATA.map((service) => (
            <SpotlightCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
}
