import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import { ExperienceCard } from "./ExperienceCard";
import realEstateImg from "../../assets/experiences/real-estate.jpg";
import managementImg from "../../assets/experiences/management.jpg";
import rentaImg from "../../assets/experiences/renta.jpg";
import conciergeImg from "../../assets/experiences/concierge.jpg";

const experiences = [
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle: "Compra, venta e inversión",
  },
  {
    id: "management",
    title: "Property Management",
    subtitle: "Administración integral",
  },
  {
    id: "renta",
    title: "Renta",
    subtitle: "Alquileres y ocupación",
  },
  {
    id: "concierge",
    title: "Concierge IA",
    subtitle: "Asistente inteligente",
  },
];

export function ExperienceHub() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto">
        {!active && (
          <>
            <div className="text-center mb-16">
              <h2 className="font-heading text-5xl mb-4">
                ¿Qué necesitás hoy?
              </h2>

              <p className="text-gray-600 max-w-2xl mx-auto">
                Seleccioná una experiencia para descubrir cómo Rinova puede ayudarte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {experiences.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActive(item.id)}
                  className="
                    cursor-pointer
                    bg-white
                    rounded-[32px]
                    p-12
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                  "
                >
                  <h3 className="font-heading text-3xl mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </>
        )}

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="
                bg-white
                rounded-[40px]
                p-12
                shadow-2xl
                min-h-[600px]
              "
            >
              <button
                onClick={() => setActive(null)}
                className="
                  mb-10
                  px-6
                  py-3
                  rounded-full
                  bg-black
                  text-white
                "
              >
                ← Volver
              </button>

              {active === "real-estate" && (
                <div>
                  <h2 className="font-heading text-5xl mb-6">
                    Real Estate
                  </h2>

                  <p className="text-lg text-gray-600">
                    Compra, venta e inversión inmobiliaria premium en Punta del Este.
                  </p>
                </div>
              )}

              {active === "management" && (
                <div>
                  <h2 className="font-heading text-5xl mb-6">
                    Property Management
                  </h2>

                  <p className="text-lg text-gray-600">
                    Control, mantenimiento, documentación y preservación del valor de tu activo.
                  </p>
                </div>
              )}

              {active === "renta" && (
                <div>
                  <h2 className="font-heading text-5xl mb-6">
                    Renta
                  </h2>

                  <p className="text-lg text-gray-600">
                    Gestión integral de alquileres temporarios y ocupación.
                  </p>
                </div>
              )}

              {active === "concierge" && (
                <div>
                  <h2 className="font-heading text-5xl mb-6">
                    Concierge IA
                  </h2>

                  <div
                    className="
                      rounded-3xl
                      bg-[#F4F4F4]
                      p-8
                    "
                  >
                    <p className="mb-4">
                      Hola 👋 Soy el Concierge IA de Rinova.
                    </p>

                    <input
                      type="text"
                      placeholder="¿En qué puedo ayudarte?"
                      className="
                        w-full
                        p-4
                        rounded-xl
                        border
                      "
                    />
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}