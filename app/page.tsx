import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-primary overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Fleet />
      <About />

      <CTA />
      <div className="w-full bg-black pt-12">
        <Footer />
      </div>
    </main>
  );
}
