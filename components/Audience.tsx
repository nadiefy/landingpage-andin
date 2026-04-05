'use client';

import { motion } from 'motion/react';
import { Users, Gauge, Briefcase } from 'lucide-react';

const cards = [
  { icon: Users, label: 'Families & Groups', desc: 'Spacious SUVs and minivans with advanced safety features for peace of mind on family vacations.' },
  { icon: Gauge, label: 'Performance Enthusiasts', desc: 'High-end sports cars and luxury sedans that deliver an unforgettable driving experience.' },
  { icon: Briefcase, label: 'Business Travelers', desc: 'Executive vehicles with premium interiors to make the right impression at your next meeting.' },
];

export function Audience() {
  return (
    <section className="w-full bg-black py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-6 bg-primary/40"></div>
            <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Perfect For</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight mb-16 max-w-4xl">
            The Perfect Vehicle<br />
            <span className="text-primary/50">For Every Occasion</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="rounded-3xl border border-primary/10 bg-white/5 flex flex-col items-start p-10 gap-6 hover:bg-white/10 transition-colors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-medium mb-3">{card.label}</h3>
                <p className="text-primary/60 leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="w-full rounded-2xl bg-white/5 border border-primary/10 p-8 md:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl text-primary/80 text-center max-w-4xl mx-auto">
            Designed for those who refuse to settle for ordinary rentals. Whether you demand exhilarating performance, spacious comfort for the whole family, or executive luxury, our diverse fleet is tailored to exceed your expectations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
