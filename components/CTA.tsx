'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { WhatsappLogo } from '@phosphor-icons/react';
import { useRef } from 'react';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="w-full bg-black py-24 lg:py-32 px-7 md:px-12 lg:px-20 scroll-mt-20 lg:scroll-mt-0" id="contact">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto relative rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/95 to-black z-10"></div>
          <motion.video
            style={{ y }}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 scale-125"
          >
            <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" type="video/mp4" />
          </motion.video>
        </div>

        <div className="relative z-10 p-8 md:p-16 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-6 bg-primary/40"></div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Hubungi Kami</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-tight text-white mb-6"
            >
              Siap melayani perjalanan Anda
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-primary/70 leading-relaxed mb-10 max-w-md"
            >
              Hubungi kami untuk reservasi kendaraan dan konsultasi rute, atau bagikan pengalaman perjalanan Anda melalui ulasan Google.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 mb-12 text-primary/80"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent-warm shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary">Headquarters</p>
                  <p className="text-primary/60">Surabaya, East Java<br />Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://wa.me/6281219996055"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group/phone focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm"
                >
                  <Phone className="w-6 h-6 text-accent-warm shrink-0 group-hover/phone:scale-105 transition-transform" />
                  <p className="text-primary/60 group-hover/phone:text-primary transition-colors">+62 812-1999-6055</p>
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent-warm shrink-0" />
                <p className="text-primary/60">contact@andintransport.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/6281219996055"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.96] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 group"
              >
                <WhatsappLogo className="w-4 h-4 text-emerald-600 shrink-0" weight="fill" />
                <span>Hubungi via WhatsApp</span>
              </a>

              <a
                href="https://share.google/J1f6nKfyXROHlnksj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-5 py-2.5 rounded-full text-sm font-medium border border-white/20 bg-white/5 text-primary hover:bg-white/10 active:scale-[0.96] transition-transform duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 group"
              >
                <span>Tinggalkan Ulasan</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-primary/60 group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </div>

          {/* Right Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.280010266478!2d112.75710207456717!3d-7.322411992685765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb1e6228d4c5%3A0xd0fc74b45774c6f!2sAndin%20Transport%20-%20PT.%20Amena%20Safeeya%20Sejahtera!5e0!3m2!1sen!2sid!4v1775239730275!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(85%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              suppressHydrationWarning
            ></iframe>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
