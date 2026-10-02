'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export function IndonesiaFlag({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-full shrink-0 ring-1 ring-black/15 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <rect y="0" width="24" height="12" fill="#E31E24" />
      <rect y="12" width="24" height="12" fill="#FFFFFF" />
    </svg>
  );
}

export function USAFlag({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rounded-full shrink-0 ring-1 ring-black/15 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <rect width="24" height="24" fill="#FFFFFF" />
      {/* 7 Red Stripes */}
      <rect y="0" width="24" height="2.2" fill="#B22234" />
      <rect y="4.1" width="24" height="2" fill="#B22234" />
      <rect y="7.9" width="24" height="2" fill="#B22234" />
      <rect y="11.7" width="24" height="2" fill="#B22234" />
      <rect y="15.5" width="24" height="2" fill="#B22234" />
      <rect y="19.3" width="24" height="2" fill="#B22234" />
      <rect y="22.5" width="24" height="1.5" fill="#B22234" />
      {/* Blue Canton */}
      <rect width="11" height="13" fill="#3C3B6E" />
      {/* Stars */}
      <circle cx="2.5" cy="3" r="0.8" fill="#FFFFFF" />
      <circle cx="6" cy="3" r="0.8" fill="#FFFFFF" />
      <circle cx="9.5" cy="3" r="0.8" fill="#FFFFFF" />
      <circle cx="4.25" cy="6.5" r="0.8" fill="#FFFFFF" />
      <circle cx="7.75" cy="6.5" r="0.8" fill="#FFFFFF" />
      <circle cx="2.5" cy="10" r="0.8" fill="#FFFFFF" />
      <circle cx="6" cy="10" r="0.8" fill="#FFFFFF" />
      <circle cx="9.5" cy="10" r="0.8" fill="#FFFFFF" />
    </svg>
  );
}

export const translations = {
  id: {
    nav: {
      services: 'Layanan',
      fleet: 'Armada',
      about: 'Tentang Kami',
      contact: 'Kontak',
      bookNow: 'Pesan Sekarang',
      menuOpen: 'Buka menu navigasi',
      menuClose: 'Tutup menu navigasi',
      langAria: 'Pilihan Bahasa',
      switchToId: 'Ganti ke Bahasa Indonesia',
      switchToEn: 'Switch to English',
    },
    hero: {
      headline: 'Armada Eksklusif. Pengemudi Profesional.',
      cta: 'Lihat Pilihan Armada',
    },
    services: {
      eyebrow: 'Layanan Unggulan',
      titlePrefix: 'Layanan untuk ',
      titleHighlight: 'setiap perjalanan',
      items: [
        {
          title: 'Jadwal Fleksibel',
          desc: 'Sewa harian, mingguan, atau bulanan sesuai rencana perjalanan Anda. Atur mobilitas eksekutif, kebutuhan produksi, hingga wisata premium dengan kendali penuh.',
        },
        {
          title: 'Layanan Pengemudi',
          desc: 'Pengemudi berseragam dan berpengalaman siap melayani rute kota hingga antar-jemput bandara. Nikmati perjalanan tepat waktu dengan kenyamanan serta privasi terjaga.',
        },
        {
          title: 'Dukungan Penuh',
          desc: 'Tim operasional kami siaga 24 jam untuk bantuan darurat jalan raya, penyesuaian rute perjalanan, hingga penggantian unit kendaraan secara cepat.',
        },
      ],
    },
    fleet: {
      eyebrow: 'Pilihan Kendaraan',
      titlePrefix: 'Koleksi armada ',
      titleHighlight: 'eksklusif',
      scrollLeft: 'Geser ke kiri',
      scrollRight: 'Geser ke kanan',
      prevImage: 'Foto sebelumnya',
      nextImage: 'Foto berikutnya',
      seatsUnit: 'Kursi',
      reserveBtn: 'Pesan via WhatsApp',
      waTemplate: (carName: string) =>
        `Halo, saya tertarik untuk menyewa ${carName}. Bisa info ketersediaan dan tarifnya?`,
      cars: {
        'alphard-executive-2025': {
          category: 'MPV PREMIUM',
          luggage: '3 koper besar',
          amenities: ['Captain seat elektrik', 'Pendingin multi-zona', 'Tirai privasi'],
        },
        'hiace-premio-2025': {
          category: 'TRANSPORTASI ROMBONGAN',
          luggage: '6 koper besar',
          amenities: ['Ventilasi AC tiap baris', 'Port pengisian USB', 'Lorong kabin luas'],
        },
        'innova-zenix-2025': {
          category: 'MPV EKSEKUTIF',
          luggage: '3 koper besar',
          amenities: ['Interior kulit premium', 'AC kabin belakang', 'Kabin senyap'],
        },
        'fortuner-2025': {
          category: 'SUV EKSEKUTIF',
          luggage: '4 koper besar',
          amenities: ['Kemampuan tangguh 4x4', 'Audio premium JBL', 'Kursi berventilasi'],
        },
        'sprinter-executive-2025': {
          category: 'SHUTTLE MEWAH',
          luggage: '5 koper besar',
          amenities: ['Kursi captain chair kulit', 'Kontrol iklim belakang', 'Port USB-C'],
        },
      },
    },
    about: {
      eyebrow: 'Tentang Kami',
      titlePrefix: 'Kenyamanan berkendara untuk ',
      titleHighlight: 'setiap agenda Anda',
      p1: 'Kami memastikan proses sewa kendaraan berjalan mudah dan tepat waktu. Seluruh armada kami rawat secara berkala demi menjaga kenyamanan, performa, serta kebersihan kabin.',
      p2: 'Mulai dari pemesanan via WhatsApp hingga pengantaran unit ke lokasi Anda, tim kami menangani setiap detail dengan cermat untuk kelancaran perjalanan Anda.',
    },
    cta: {
      eyebrow: 'Hubungi Kami',
      heading: 'Siap melayani perjalanan Anda',
      desc: 'Hubungi kami untuk reservasi kendaraan dan konsultasi rute, atau bagikan pengalaman perjalanan Anda melalui ulasan Google.',
      headquarters: 'Kantor Pusat',
      addressLocation: 'Surabaya, Jawa Timur\nIndonesia',
      waButton: 'Hubungi via WhatsApp',
      reviewButton: 'Tinggalkan Ulasan',
    },
    footer: {
      company: 'Perusahaan',
      legal: 'Legal',
      social: 'Media Sosial',
      fleet: 'Armada',
      services: 'Layanan',
      about: 'Tentang Kami',
      contact: 'Kontak',
      terms: 'Syarat & Ketentuan',
      privacy: 'Kebijakan Privasi',
      cookies: 'Kebijakan Cookie',
      rights: 'Hak cipta dilindungi.',
    },
  },
  en: {
    nav: {
      services: 'Services',
      fleet: 'Fleet',
      about: 'About Us',
      contact: 'Contact',
      bookNow: 'Book Now',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
      langAria: 'Language Selection',
      switchToId: 'Switch to Indonesian',
      switchToEn: 'Switch to English',
    },
    hero: {
      headline: 'Premium Fleet. Professional Chauffeurs.',
      cta: 'Explore Our Fleet',
    },
    services: {
      eyebrow: 'Featured Services',
      titlePrefix: 'Tailored transport for ',
      titleHighlight: 'every journey',
      items: [
        {
          title: 'Flexible Scheduling',
          desc: 'Daily, weekly, or monthly rentals tailored to your itinerary. Total control for executive travel, production crews, or luxury tours.',
        },
        {
          title: 'Chauffeur Service',
          desc: 'Uniformed, vetted drivers for city routes and airport transfers. Travel on time with guaranteed privacy and comfort.',
        },
        {
          title: '24/7 Roadside Support',
          desc: 'Round-the-clock operational support for roadside assistance, route adjustments, and rapid vehicle replacements.',
        },
      ],
    },
    fleet: {
      eyebrow: 'Our Collection',
      titlePrefix: 'The exclusive ',
      titleHighlight: 'fleet',
      scrollLeft: 'Scroll left',
      scrollRight: 'Scroll right',
      prevImage: 'Previous image',
      nextImage: 'Next image',
      seatsUnit: 'Seats',
      reserveBtn: 'Reserve via WhatsApp',
      waTemplate: (carName: string) =>
        `Hello, I am interested in renting the ${carName}. Could you provide availability and rates?`,
      cars: {
        'alphard-executive-2025': {
          category: 'PREMIUM MPV',
          luggage: '3 large suitcases',
          amenities: ['Reclining captain seats', 'Climate zones', 'Privacy curtains'],
        },
        'hiace-premio-2025': {
          category: 'GROUP TRANSPORT',
          luggage: '6 large suitcases',
          amenities: ['Individual AC vents', 'USB charging ports', 'Wide cabin aisle'],
        },
        'innova-zenix-2025': {
          category: 'EXECUTIVE MPV',
          luggage: '3 large suitcases',
          amenities: ['Leather interior', 'Rear AC controls', 'Quiet cabin acoustics'],
        },
        'fortuner-2025': {
          category: 'EXECUTIVE SUV',
          luggage: '4 large suitcases',
          amenities: ['4x4 capability', 'JBL sound system', 'Ventilated seats'],
        },
        'sprinter-executive-2025': {
          category: 'LUXURY SHUTTLE',
          luggage: '5 large suitcases',
          amenities: ['Captain chair leather seats', 'Rear climate control', 'USB-C ports'],
        },
      },
    },
    about: {
      eyebrow: 'About Us',
      titlePrefix: 'Refined travel tailored for ',
      titleHighlight: 'your schedule',
      p1: 'We provide punctual, dependable car rentals with a fleet maintained to the highest standards of safety, cleanliness, and performance.',
      p2: 'From fast WhatsApp booking to on-time vehicle delivery at your doorstep, our team handles every detail for an effortless journey.',
    },
    cta: {
      eyebrow: 'Get In Touch',
      heading: 'Ready for your next journey',
      desc: 'Contact our team for vehicle reservations and custom route planning, or share your travel experience on Google Reviews.',
      headquarters: 'Headquarters',
      addressLocation: 'Surabaya, East Java\nIndonesia',
      waButton: 'Chat on WhatsApp',
      reviewButton: 'Leave a Review',
    },
    footer: {
      company: 'Company',
      legal: 'Legal',
      social: 'Social Links',
      fleet: 'Our Fleet',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      terms: 'Terms & Conditions',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Policy',
      rights: 'All rights reserved.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['id'];
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'id',
  setLanguage: () => {},
  t: translations.id,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('andin_lang') as Language | null;
      if (saved === 'id' || saved === 'en') {
        setLanguageState(saved);
      }
    } catch {
      // Ignore localStorage read errors
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('andin_lang', lang);
    } catch {
      // Ignore localStorage write errors
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
