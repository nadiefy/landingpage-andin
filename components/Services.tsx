'use client';

import Image from 'next/image';

const SERVICES_DATA = [
  {
    title: "Flexible scheduling",
    desc: "Rates by the day, week, or month — aligned to your exact itinerary. Keep full control of your transport logistics with options tailored for executive transfers, production shoots, and luxury tour schedules.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Chauffeur services",
    desc: "Professional, vetted drivers and direct airport transfers, dispatched on request. Experience flawless hospitality, absolute discretion, and route optimization from our English-speaking, fully uniformed chauffeurs.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Continuous support",
    desc: "Roadside response and concierge operations, active at any hour. A dedicated dispatch team is constantly monitoring our fleet to handle vehicle swaps, route alterations, or roadside support instantly.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop"
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
