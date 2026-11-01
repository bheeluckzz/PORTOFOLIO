import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Logos } from "@/components/Logos";
import { Works } from "@/components/Works";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-[#333333] selection:text-white">
      <Navbar />
      <Hero />
      <Logos />
      <Works />
      <Services />
      <Experience />
      <FAQ />
      <Journal />
      <Footer />
    </main>
  );
}
