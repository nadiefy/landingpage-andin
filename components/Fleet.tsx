'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { UsersFour, CheckCircle, WhatsappLogo, CaretLeft, CaretRight } from '@phosphor-icons/react';

const fleet = [
  {
    id: "alphard-executive-2025",
    name: "Toyota Alphard Executive Lounge 2025",
    category: "PREMIUM MPV",
    seats: 7,
    luggage: "3 large suitcases",
    amenities: ["Reclining captain seats", "Climate zones", "Privacy curtains"],
    images: [
      "/assets/pic/fleet-section/alphard-1.jpg",
      "/assets/pic/fleet-section/alphard-2.JPG"
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
      "/assets/pic/fleet-section/hiace-1.jpg",
      "/assets/pic/fleet-section/hiace-2.jpg"
    ],
  },
  {
    id: "innova-zenix-2025",
    name: "Toyota Innova Zenix 2025",
    category: "EXECUTIVE MPV",
    seats: 7,
    luggage: "3 large suitcases",
    amenities: ["Leather interior", "Rear AC", "Quiet cabin"],
    images: [
      "/assets/pic/fleet-section/innova-1.jpg",
      "/assets/pic/fleet-section/innova-2.jpg"
    ],
  },
  {
    id: "fortuner-2025",
    name: "Toyota Fortuner 2025",
    category: "EXECUTIVE SUV",
    seats: 7,
    luggage: "4 large suitcases",
    amenities: ["4x4 capability", "JBL sound system", "Ventilated seats"],
    images: [
      "/assets/pic/fleet-section/fortuner-1.jpg",
      "/assets/pic/fleet-section/fortuner-2.JPG"
    ],
  },
  {
    id: "sprinter-executive-2025",
    name: "Mercedes Benz Sprinter 2025",
    category: "LUXURY SHUTTLE",
    seats: 7,
    luggage: "5 large suitcases",
    amenities: ["Captain chair leather seats", "Rear climate control", "USB-C ports"],
    images: [
      "/assets/pic/fleet-section/sprinter-1.JPG",
      "/assets/pic/fleet-section/sprinter-2.JPG"
    ],
  }
];


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
    <div className="relative flex flex-col w-[78vw] sm:w-[380px] shrink-0">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#1d1d1f] group/image">
        <Image
          src={car.images[currentImage]}
          alt={car.name}
          fill
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 640px) 78vw, 380px"
        />
        
        <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover/image:opacity-100 transition-opacity">
           <button onClick={prevImage} className="p-1.5 bg-black/60 text-white hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400" aria-label="Previous image"><CaretLeft weight="bold" className="w-4 h-4"/></button>
           <button onClick={nextImage} className="p-1.5 bg-black/60 text-white hover:bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400" aria-label="Next image"><CaretRight weight="bold" className="w-4 h-4"/></button>
        </div>
        
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {car.images.map((_, idx) => (
            <div key={idx} className={`h-0.5 transition-colors ${idx === currentImage ? 'w-4 bg-white' : 'w-2 bg-zinc-600'}`} />
          ))}
        </div>
      </div>
      
      <div className="mt-8 min-h-[160px]">
        <h3 className="text-xl sm:text-2xl font-display font-medium text-white tracking-tighter leading-none">{car.name}</h3>
        
        <p className="mt-2 text-sm text-zinc-400">
          {car.category} · {car.seats} Seats
        </p>

        <div className="mt-4 flex flex-col gap-3">
          {car.amenities.map((amenity, idx) => (
            <div key={idx} className="flex items-start gap-2 text-sm text-zinc-400">
              <CheckCircle className="w-4 h-4 text-zinc-500 shrink-0 mt-0.5" aria-hidden="true" />
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto pt-4">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 px-4 bg-white text-black text-sm font-semibold hover:bg-zinc-200 active:scale-[0.97] transition-colors transition-transform duration-150 flex items-center justify-center gap-2 group/btn rounded-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
          aria-label={`Reserve ${car.name} via WhatsApp`}
        >
          <WhatsappLogo className="w-5 h-5 group-hover/btn:scale-110 transition-transform" weight="fill" />
          Reserve via WhatsApp
        </a>
      </div>
    </div>
  );
}

export function Fleet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const handleReplay = () => {
      setAnimationKey(prev => prev + 1);
    };

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href') === '#fleet') {
        handleReplay();
      }
    };

    const handleHashChange = () => {
      if (window.location.hash === '#fleet') {
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
    <section className="w-full bg-black py-24 lg:py-32 overflow-x-clip relative scroll-mt-20 lg:scroll-mt-0" id="fleet">
      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-6 bg-primary/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Our Collection</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none text-white">
            The exclusive{' '}
            <span className="relative inline-block">
              <motion.span
                key={animationKey}
                className="absolute inset-x-0 -top-[0.15em] -bottom-[0.15em] bg-[#ec3237] origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              />
              <span className="relative z-10">fleet</span>
            </span>
          </h2>
        </div>

        <motion.div
          className="hidden md:flex gap-2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <button onClick={scrollLeft} className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:bg-zinc-900 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400" aria-label="Scroll left">
            <CaretLeft className="w-5 h-5" weight="bold" />
          </button>
          <button onClick={scrollRight} className="w-12 h-12 flex items-center justify-center border border-zinc-800 hover:bg-zinc-900 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400" aria-label="Scroll right">
            <CaretRight className="w-5 h-5" weight="bold" />
          </button>
        </motion.div>
      </div>

      {/* Carousel Container sharing the exact same max-w-7xl mx-auto px-* wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full"
      >
        <div className="relative w-full">
          <div className="w-[100vw] relative left-[50%] -ml-[50vw]">
            <div
              ref={containerRef}
              className="flex gap-5 overflow-x-auto pb-10 [&::-webkit-scrollbar]:hidden touch-manipulation overscroll-x-contain"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="shrink-0 w-6 md:w-12 lg:w-20"></div>
              {fleet.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}

              <div className="shrink-0 min-w-[1px] w-[max(0px,calc(100vw-5rem))]"></div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
