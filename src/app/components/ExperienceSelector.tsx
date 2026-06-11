import { motion } from "motion/react";
import { useState } from "react";

import realEstateImg from "../../assets/images/rinova/real.jpeg";
import propertyManagementImg from "../../assets/images/rinova/manage.jpeg";
import rentaImg from "../../assets/images/rinova/renta.jpeg";
import conciergeImg from "../../assets/images/rinova/concierge.jpeg";

interface ExperienceSelectorProps {
  onSelect: (experience: string) => void;
}

const experiences = [
  
  {
    id: "management",
    title: "Property Management",
    subtitle:
      "Administración integral y preservación de activos inmobiliarios.",
    image:
      propertyManagementImg,
  },
  {
    id: "renta",
    title: "Renta Inteligente",
    subtitle:
      "Maximizamos la rentabilidad de tu propiedad durante todo el año.",
    image:
      rentaImg,
  },
  {
    id: "real-estate",
    title: "Real Estate",
    subtitle:
      "Compra, venta e inversión inmobiliaria premium en Punta del Este.",
    image:
      realEstateImg,
  },
  {
    id: "concierge",
    title: "Concierge IA",
    subtitle:
      "Asistencia inteligente para propietarios, compradores e inversores.",
    image:
      conciergeImg,
  },
];

export function ExperienceSelector({
  onSelect,
}: ExperienceSelectorProps) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="experience-selector"
      className="
        min-h-screen
        px-6
        py-28
        bg-[#F4EFE7]
      "
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="font-heading text-5xl md:text-7xl mb-6">
            Explorá Rinova
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Más que una inmobiliaria.
            Descubrí nuestros servicios especializados para
            propietarios, inversores y clientes que buscan una
            experiencia diferente.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="space-y-10">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              layoutId={`experience-${experience.id}`}
              onClick={() => onSelect(experience.id)}
              onHoverStart={() =>
                setHovered(experience.id)
              }
              onHoverEnd={() =>
                setHovered(null)
              }
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.015,
              }}
              className="
                relative
                h-[420px]
                md:h-[500px]
                rounded-[40px]
                overflow-hidden
                cursor-pointer
                shadow-2xl
                transition-all
              "
              style={{
                filter:
                  hovered &&
                  hovered !== experience.id
                    ? "brightness(0.55)"
                    : "brightness(1)",
              }}
            >
              {/* Imagen */}
              <img
                src={experience.image}
                alt={experience.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />

              {/* Overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-black/80
                  via-black/50
                  to-black/20
                "
              />

              {/* Glow Hover */}
              <motion.div
                animate={{
                  opacity:
                    hovered === experience.id
                      ? 1
                      : 0,
                }}
                className="
                  absolute
                  inset-0
                  bg-white/5
                "
              />

              {/* Contenido */}
              <div
                className="
                  relative
                  z-10
                  h-full
                  flex
                  flex-col
                  justify-end
                  px-12
                  pb-12
                "
              >
                <h3
                  className="
                    font-heading
                    text-white
                    text-5xl
                    md:text-7xl
                    mb-5
                  "
                >
                  {experience.title}
                </h3>

                <p
                  className="
                    text-white/80
                    text-lg
                    max-w-2xl
                  "
                >
                  {experience.subtitle}
                </p>

                <div className="mt-8">
                  <span
                    className="
                      inline-flex
                      items-center
                      gap-2
                      bg-white
                      text-black
                      px-6
                      py-3
                      rounded-full
                      text-sm
                      font-medium
                    "
                  >
                    Explorar →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}