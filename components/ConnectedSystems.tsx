'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Gauge, Zap, Car, Settings, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const fleetCars = [
  {
    id: 1,
    name: 'Porsche 911 Carrera',
    type: 'Sports Coupe',
    price: 450,
    specs: { acceleration: '3.5s', power: '443 hp', transmission: '8-speed PDK', seats: 2 },
    images: [
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: 2,
    name: 'Mercedes-Benz G-Class',
    type: 'Luxury SUV',
    price: 550,
    specs: { acceleration: '4.5s', power: '577 hp', transmission: '9-speed Auto', seats: 5 },
    images: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: 3,
    name: 'Tesla Model S Plaid',
    type: 'Electric Sedan',
    price: 350,
    specs: { acceleration: '1.99s', power: '1020 hp', transmission: 'Single-speed', seats: 5 },
    images: [
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1561580125-028ce3bf7b02?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  },
  {
    id: 4,
    name: 'Range Rover SV',
    type: 'Premium SUV',
    price: 600,
    specs: { acceleration: '4.3s', power: '606 hp', transmission: '8-speed Auto', seats: 5 },
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800&h=600',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800&h=600'
    ]
  }
];

function CarCard({ car }: { car: typeof fleetCars[0] }) {
  const [currentImage, setCurrentImage] = useState(0);

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
    <div className="bg-zinc-950/80 border border-white/10 rounded-2xl overflow-hidden flex flex-col group/card hover:border-white/20 transition-colors">
      {/* Carousel */}
      <div className="relative h-48 sm:h-52 w-full group/carousel">
        <Image 
          src={car.images[currentImage]} 
          alt={car.name} 
          fill 
          className="object-cover transition-transform duration-500 group-hover/card:scale-105" 
          referrerPolicy="no-referrer" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover/carousel:opacity-100 transition-opacity">
           <button onClick={prevImage} className="p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-colors"><ChevronLeft className="w-4 h-4"/></button>
           <button onClick={nextImage} className="p-1.5 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/80 transition-colors"><ChevronRight className="w-4 h-4"/></button>
        </div>
        
        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {car.images.map((_, idx) => (
            <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImage ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
      
      {/* Details */}
      <div className="p-5 flex flex-col flex-grow relative z-10 bg-zinc-950">
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className="text-[10px] text-accent-warm font-bold uppercase tracking-wider mb-1">{car.type}</p>
            <h4 className="text-base font-display font-medium text-white leading-tight">{car.name}</h4>
          </div>
          <div className="text-right shrink-0 ml-2">
            <p className="text-lg font-display text-white leading-none">${car.price}</p>
            <p className="text-[10px] text-white/50 mt-1">/ day</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 mb-6 text-[11px] text-white/70">
          <div className="flex items-center gap-1.5"><Gauge className="w-3.5 h-3.5 text-white/40"/> {car.specs.acceleration}</div>
          <div className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5 text-white/40"/> {car.specs.power}</div>
          <div className="flex items-center gap-1.5"><Settings className="w-3.5 h-3.5 text-white/40"/> {car.specs.transmission}</div>
          <div className="flex items-center gap-1.5"><Car className="w-3.5 h-3.5 text-white/40"/> {car.specs.seats} Seats</div>
        </div>
        
        <button className="mt-auto w-full py-2.5 rounded-xl bg-white/10 text-white text-sm font-semibold hover:bg-white hover:text-black transition-colors">
          Reserve Now
        </button>
      </div>
    </div>
  );
}

export function ConnectedSystems() {
  return (
    <section className="w-full bg-black py-24 lg:py-32" id="fleet">
      <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-6 bg-primary/40"></div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Our Collection</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight">
              The Exclusive<br />
              <span className="text-primary/50">Fleet</span>
            </h2>
          </div>
          <p className="text-primary/60 max-w-md text-lg">
            Select from our meticulously maintained collection of the world's most sought-after vehicles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetCars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <CarCard car={car} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
