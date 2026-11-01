import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Works } from "@/components/Works";
import { Services } from "@/components/Services";
import { Experience } from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import { Journal } from "@/components/Journal";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0B0D] text-white selection:bg-[#2A2D37] selection:text-white">
      <Navbar />
      <Hero />
      <Works />
      <Services />
      <Experience />
      <FAQ />
      <Journal />
      <Footer />
    </main>
  );
}
