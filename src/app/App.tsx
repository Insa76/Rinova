import { useState } from "react";
import { AnimatePresence } from "motion/react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";

import { ExperienceSelector } from "./components/ExperienceSelector";

import { RealEstateView } from "./views/RealEstateView";
import { PropertyManagementView } from "./views/PropertyManagementView";
import { RentaView } from "./views/RentaView";
import { ConciergeView } from "./views/ConciergeView";

type ExperienceType =
  | null
  | "real-estate"
  | "management"
  | "renta"
  | "concierge";

export default function App() {
  const [activeExperience, setActiveExperience] =
    useState<ExperienceType>(null);

  const goHome = () => {
    setActiveExperience(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#F4EFE7]">
      <AnimatePresence mode="wait">
        {activeExperience === null && (
          <div key="home">
            <Navbar />

            <Hero />

            <ExperienceSelector
              onSelect={(experience) =>
                setActiveExperience(
                  experience as ExperienceType
                )
              }
            />

            <Footer />
          </div>
        )}

        {activeExperience === "real-estate" && (
          <div key="real-estate">
            <RealEstateView onBack={goHome} />
          </div>
        )}

        {activeExperience === "management" && (
          <div key="management">
            <PropertyManagementView onBack={goHome} />
          </div>
        )}

        {activeExperience === "renta" && (
          <div key="renta">
            <RentaView onBack={goHome} />
          </div>
        )}

        {activeExperience === "concierge" && (
          <div key="concierge">
            <ConciergeView onBack={goHome} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}