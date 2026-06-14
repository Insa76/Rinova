import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Footer } from "../components/Footer";
import { ExperienceSelector } from "../components/ExperienceSelector";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F4EFE7]">
      <Navbar />

      <Hero />

      <ExperienceSelector />

      <Footer />
    </div>
  );
}