'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from 'motion/react';
import Image from 'next/image';
import { UsersFour, Suitcase, CheckCircle, WhatsappLogo, CaretLeft, CaretRight } from '@phosphor-icons/react';

const fleet = [
  {
    id: "alphard-executive-2025",
    name: "Toyota Alphard Executive Lounge 2025",
    category: "PREMIUM MPV",
    seats: 7,
    luggage: "3 large suitcases",
    amenities: ["Reclining captain seats", "Climate zones", "Privacy curtains"],
    images: [
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&h=1000",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=1000"
    ],
  },
  {
    id: "hiace-premio-2025",
    name: "Toyota HiAce Premio 2025",
    category: "GROUP TRANSPORT",
    seats: 12,
    luggage: "6 large suitcases",
    amenities: ["Individual AC vents", "USB ports", "Wide aisle"],
    images: [
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800&h=1000",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&h=1000"
    ],
  },
  {
    id: "innova-zenix-2025",
    name: "Toyota Innova Zenix 2025",
    category: "EXECUTIVE SEDAN",
    seats: 5,
    luggage: "2 large suitcases",
    amenities: ["Leather interior", "Rear AC", "Quiet cabin"],
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800&h=1000",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=1000"
    ],
  },
  {
    id: "innova-reborn-2025",
    name: "Toyota Innova Reborn 2025",
    category: "FAMILY MPV",
    seats: 7,
    luggage: "3 large suitcases",
    amenities: ["Diesel efficiency", "Spacious cabin", "Rear AC"],
    images: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800&h=1000",
      "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800&h=1000"
    ],
  },
  {
    id: "fortuner-gr-legend-2025",
    name: "Toyota Fortuner GR Legend 2025",
    category: "LUXURY SUV",
    seats: 7,
    luggage: "4 large suitcases",
    amenities: ["4WD capable", "Premium audio", "Power tailgate"],
    images: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800&h=1000",
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800&h=1000"
    ],
  },
];

function SpotlightCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative flex h-full w-full flex-col overflow-hidden rounded-none border border-zinc-800 bg-zinc-950 ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 hidden sm:block @media (prefers-reduced-motion: reduce) { display: none; }"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 80%
            )
          `,
        }}
      />
      {children}
    </div>
  );
}

function CarCard({ car }: { car: typeof fleet[0] }) {
  const [currentImage, setCurrentImage] = useState(0);
  const whatsappNumber = "628123456789";
  const message = encodeURIComponent(`Halo, saya tertarik untuk menyewa ${car.name}. Bisa info lebih lanjut?`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  return (
    <SpotlightCard className="w-[85vw] sm:w-[400px] shrink-0 snap-start flex flex-col justify-between">
      <div className="flex flex-col flex-grow">
        <div className="relative aspect-[4/3] w-full overflow-hidden group/image">
          <Image
            src={car.images[currentImage]}
            alt={car.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 85vw, 400px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
          
          <div className="absolute top-4 left-4">
            <span className="bg-black/50 backdrop-blur-md text-zinc-300 text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 border border-zinc-700/50">
              {car.category}
            </span>
          </div>

          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover/image:opacity-100 transition-opacity">
             <button onClick={prevImage} className="p-1.5 bg-black/60 text-white hover:bg-black transition-colors" aria-label="Previous image"><CaretLeft weight="bold" className="w-4 h-4"/></button>
             <button onClick={nextImage} className="p-1.5 bg-black/60 text-white hover:bg-black transition-colors" aria-label="Next image"><CaretRight weight="bold" className="w-4 h-4"/></button>
          </div>
          
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
            {car.images.map((_, idx) => (
              <div key={idx} className={`h-0.5 transition-colors ${idx === currentImage ? 'w-4 bg-white' : 'w-2 bg-zinc-600'}`} />
            ))}
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-6 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tighter leading-tight mb-4">{car.name}</h3>
            
            <div className="grid grid-cols-2 gap-4 text-sm text-zinc-400 border-t border-zinc-800/50 pt-4">
              <div className="flex items-center gap-2">
                <UsersFour className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                <span>{car.seats} Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <Suitcase className="w-4 h-4 text-zinc-500" aria-hidden="true" />
                <span className="truncate" title={car.luggage}>{car.luggage}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-zinc-800/50 flex flex-col gap-2">
              {car.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 pt-0 mt-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group/btn"
          aria-label={`Reserve ${car.name} via WhatsApp`}
        >
          <WhatsappLogo className="w-5 h-5 group-hover/btn:scale-110 transition-transform" weight="fill" />
          Reserve via WhatsApp
        </a>
      </div>
    </SpotlightCard>
  );
}

export function Fleet() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-black py-24 lg:py-32 overflow-hidden relative" id="fleet">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-primary/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-white tracking-tighter">
            The Exclusive<br />
            <span className="text-zinc-500">Fleet</span>
          </h2>
        </motion.div>
        
        <motion.div 
          className="hidden md:flex gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:bg-zinc-900 text-white transition-colors" aria-label="Scroll left">
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:bg-zinc-900 text-white transition-colors" aria-label="Scroll right">
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-6 md:px-12 lg:px-20 pb-10 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide scrollbar for webkit */}
          <style dangerouslySetInnerHTML={{__html: `
            .scrollbar-hide::-webkit-scrollbar {
                display: none;
            }
          `}} />
          
          {fleet.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
          
          {/* Spacer to allow the last card to scroll fully into view */}
          <div className="w-[1px] shrink-0"></div>
        </div>
      </motion.div>
    </section>
  );
}
