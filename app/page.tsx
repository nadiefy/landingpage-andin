import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ConnectedSystems } from '@/components/ConnectedSystems';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Audience } from '@/components/Audience';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/ui/footer-section';

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <ConnectedSystems />
      <About />
      <Audience />
      <CTA />
      <div className="w-full bg-black pt-12">
        <Footer />
      </div>
    </main>
  );
}
