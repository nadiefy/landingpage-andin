'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, MapPin, Phone, Mail } from 'lucide-react';
import { useRef } from 'react';

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section className="w-full bg-black py-24 lg:py-32 px-7 md:px-12 lg:px-20" id="contact">
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
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-6 bg-primary/40"></div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary/80">Review Us</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[1.1] mb-6"
            >
              Share your experience<br />
              <span className="text-primary/50">with us</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-primary/60 mb-10 max-w-md"
            >
              Your feedback drives our commitment to excellence. Leave a review on Google to let us know about your journey and help others discover our premium service.
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
                <Phone className="w-6 h-6 text-accent-warm shrink-0" />
                <p className="text-primary/60">+62 812-3456-7890</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-accent-warm shrink-0" />
                <p className="text-primary/60">contact@andintransport.com</p>
              </div>
            </motion.div>

            <motion.a
              href="https://share.google/J1f6nKfyXROHlnksj"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-4 pl-8 pr-3 py-3 rounded-full text-lg font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors group"
            >
              Leave a Review
              <span className="w-10 h-10 rounded-full bg-foreground flex items-center justify-center text-primary group-hover:scale-105 transition-transform">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </motion.a>
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
