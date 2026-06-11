import { motion } from "motion/react";

import { properties } from "../data/properties";
import { PropertyCard } from "../properties/PropertyCard";
import { ExperienceNavigator } from "../components/ExperienceNavigator";
import realEstateHero from "../../assets/images/experiences/realHero.jpeg";

interface RealEstateViewProps {
  onBack: () => void;
}

export function RealEstateView({
  onBack,
}: RealEstateViewProps) {
  return (
    <motion.div
      layoutId="experience-real-estate"
      initial={{
        opacity: 0,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="min-h-screen bg-[#F4EFE7]"
    >
      {/* HERO */}
      <section className="px-8 pt-8 mb-10">
        <div
          className="
            max-w-7xl
            mx-auto
            h-[550px]
            rounded-[40px]
            overflow-hidden
            relative
            shadow-2xl
          "
        >
          <img
            src={realEstateHero}
            alt="Real Estate"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/80
              via-black/40
              to-transparent
            "
          />

          <div
            className="
              relative
              z-10
              h-full
              flex
              flex-col
              justify-end
              p-12
            "
          >
            <button
              onClick={onBack}
              className="
                absolute
                top-8
                left-8
                bg-white
                text-black
                px-5
                py-3
                rounded-full
              "
            >
              ← Volver
            </button>

            <span
              className="
                text-white/70
                uppercase
                tracking-[4px]
                mb-4
              "
            >
              Punta del Este
            </span>

            <h1
              className="
                font-heading
                text-white
                text-6xl
                md:text-8xl
              "
            >
              Real Estate
            </h1>

            <p
              className="
                text-white/80
                mt-4
                max-w-2xl
                text-lg
              "
            >
              Compra, venta e inversión inmobiliaria
              premium en Punta del Este.
            </p>
          </div>
        </div>
      </section>

      <ExperienceNavigator
  items={[
    {
      id: "propiedades",
      label: "Propiedades",
    },
    {
      id: "mapa",
      label: "Mapa",
    },
    {
      id: "zonas",
      label: "Zonas",
    },
    {
      id: "contactar",
      label: "Contacto",
    },
  ]}
/>

      {/* CONTENIDO */}
      <section className="px-8 py-16">
  <div className="max-w-7xl mx-auto">

    {/* PROPIEDADES */}
    <div
      id="propiedades"
      className="mb-24 scroll-mt-32"
    >
      <h2 className="font-heading text-4xl mb-8">
        Propiedades Destacadas
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {properties.slice(0, 4).map((property) => (
          <PropertyCard
            key={property.id}
            {...property}
          />
        ))}
      </div>
    </div>

    {/* MAPA */}
    <div
      id="mapa"
      className="mb-24 scroll-mt-32"
    >
      <div
        className="
          bg-white
          rounded-[32px]
          overflow-hidden
          shadow-xl
        "
      >
        <div className="p-8">
          <h3 className="font-heading text-3xl mb-3">
            Explorá Punta del Este
          </h3>

          <p className="text-gray-500">
            Ubicación de nuestras propiedades destacadas.
          </p>
        </div>

        <iframe
          title="Mapa Punta del Este"
          src="https://maps.google.com/maps?q=Punta%20del%20Este&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="
            w-full
            h-[500px]
            border-0
          "
          loading="lazy"
        />
      </div>
    </div>

    {/* ZONAS */}
    <div
      id="zonas"
      className="mb-24 scroll-mt-32"
    >
      <h2 className="font-heading text-4xl mb-8">
        Zonas Premium
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[
  "Península",
  "Playa Mansa",
  "Playa Brava",
  "José Ignacio",
].map((zone) => (
  <motion.div
    key={zone}
    whileHover={{
      y: -6,
      scale: 1.02,
    }}
    className="
      bg-white
      rounded-[24px]
      p-8
      shadow-lg
      cursor-pointer
    "
  >
    <h3 className="text-xl mb-3">
      {zone}
    </h3>

    <p className="text-gray-500 text-sm">
      Ver propiedades disponibles
    </p>
  </motion.div>
))}
      </div>
    </div>

    {/* CTA */}
    <div
      id="contactar"
      className="scroll-mt-32"
    >
      <div
        className="
          bg-black
          text-white
          rounded-[40px]
          p-12
          text-center
        "
      >
        <h2
          className="
            font-heading
            text-4xl
            mb-6
          "
        >
          ¿Buscando una oportunidad única?
        </h2>

        <p
          className="
            text-white/70
            max-w-2xl
            mx-auto
            mb-8
          "
        >
          Nuestro equipo puede ayudarte a
          encontrar la propiedad ideal para vivir,
          invertir o generar renta.
        </p>

        <button
          className="
            px-8
            py-4
            bg-white
            text-black
            rounded-full
            font-medium
          "
        >
          Hablar con un asesor
        </button>
      </div>
    </div>

  </div>
</section>
    </motion.div>
  );
}