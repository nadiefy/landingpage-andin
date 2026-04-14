import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ConnectedSystems } from '@/components/ConnectedSystems';
import { Services } from '@/components/Services';
import { About } from '@/components/About';

import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ConnectedSystems />
      <About />

      <CTA />
      <div className="w-full bg-black pt-12">
        <Footer />
      </div>
    </main>
  );
}
