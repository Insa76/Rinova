import { motion } from "motion/react";
import {
  BedDouble,
  Bath,
  Maximize,
  MapPin,
  Calendar,
  ArrowLeft,
} from "lucide-react";

import { Link } from "react-router-dom";

import heroImage from "../../assets/properties/depto.jpg";
import floorPlan from "../../assets/properties/floorplan.jpg";

export function PropertyDetail() {
  const property = {
    id: 1,
    title: "Ocean Residence",
    subtitle: "Disponible ahora",
    location: "Punta del Este, Uruguay",
    description:
      "Residencia premium frente al mar con vistas panorámicas, diseño contemporáneo y una ubicación privilegiada para quienes buscan exclusividad y rentabilidad.",

    price: "USD 2.400.000",

    area: "620 m²",
    outdoorArea: "340 m²",

    beds: 5,
    baths: 4,

    completion: "2026",
    architect: "Studio Forma",

    image: heroImage,
    floorPlan,
  };

  return (
    <section className="min-h-screen bg-[#D8C1AE] py-10 px-4">
      <div
        className="
          max-w-[1700px]
          mx-auto
          rounded-[12px]
          overflow-hidden
          shadow-2xl
          grid
          lg:grid-cols-[420px_1fr]
          bg-black/20
          backdrop-blur-lg
        "
      >
        {/* SIDEBAR */}
        <div
          className="
            bg-black/90
            backdrop-blur-xl
            text-white
            p-10
            flex
            flex-col
            justify-between
          "
        >
          <div>
            <Link
              to="/"
              className="
                inline-flex
                items-center
                gap-2
                text-white/70
                hover:text-white
                mb-10
                transition-all
              "
            >
              <ArrowLeft className="w-4 h-4" />
              Volver
            </Link>

            <div className="mb-4 text-sm uppercase tracking-[3px] text-white/70">
              {property.subtitle}
            </div>

            <h1
              className="
                font-heading
                text-5xl
                leading-none
                mb-6
              "
            >
              {property.title}
            </h1>

            <p className="text-white/80 leading-relaxed">
              {property.description}
            </p>

            <div
              className="
                mt-10
                text-4xl
                font-semibold
                text-white
              "
            >
              {property.price}
            </div>

            {/* ESPECIFICACIONES */}
            <div className="mt-12 space-y-5">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Interior</span>
                <span>{property.area}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Exterior</span>
                <span>{property.outdoorArea}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Habitaciones</span>
                <span>{property.beds}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Baños</span>
                <span>{property.baths}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Entrega</span>
                <span>{property.completion}</span>
              </div>

              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-white/70">Arquitectura</span>
                <span>{property.architect}</span>
              </div>
            </div>
          </div>

          {/* PLANO */}
          <div className="mt-12">
            <img
              src={property.floorPlan}
              alt="Plano"
              className="
                w-full
                rounded-md
                border
                border-white/20
              "
            />

            <div
              className="
                mt-4
                flex
                justify-center
                text-sm
                text-white/70
              "
            >
              Planta Principal
            </div>
          </div>
        </div>

        {/* IMAGEN */}
        <div className="relative min-h-[900px]">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            src={property.image}
            alt={property.title}
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
              bg-gradient-to-t
              from-black/30
              via-transparent
              to-black/10
            "
          />

          {/* Datos flotantes */}
          <div
            className="
              absolute
              top-10
              right-10
              bg-white/10
              backdrop-blur-md
              rounded-md
              px-8
              py-6
              text-white
            "
          >
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <BedDouble className="w-6 h-6 mx-auto mb-2" />
                <div>{property.beds}</div>
              </div>

              <div className="text-center">
                <Bath className="w-6 h-6 mx-auto mb-2" />
                <div>{property.baths}</div>
              </div>

              <div className="text-center">
                <Maximize className="w-6 h-6 mx-auto mb-2" />
                <div>{property.area}</div>
              </div>
            </div>
          </div>

          {/* Footer Overlay */}
          <div
            className="
              absolute
              bottom-10
              left-10
              right-10
              flex
              justify-between
              items-center
              text-white
            "
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              {property.location}
            </div>

            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5" />
              Entrega {property.completion}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}