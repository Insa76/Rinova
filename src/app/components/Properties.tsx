import { motion } from "motion/react";
import { PropertyCard } from "./PropertyCard";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import depto from "../../assets/depto.jpg";

const properties = [
  {
    id: 1,
    title: "Villa Moderna Frente al Mar",
    location: "Playa Brava, Punta del Este",
    price: "USD 2,400,000",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
    beds: 5,
    baths: 4,
    area: "450 m²",
    type: "Venta",
  },
  {
    id: 2,
    title: "Apartamento de Lujo",
    location: "Península, Punta del Este",
    price: "USD 850,000",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
    beds: 3,
    baths: 2,
    area: "180 m²",
    type: "Venta",
  },
  {
    id: 3,
    title: "Casa de Campo Exclusiva",
    location: "José Ignacio",
    price: "USD 1,800,000",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    beds: 4,
    baths: 3,
    area: "320 m²",
    type: "Venta",
  },
  {
    id: 4,
    title: "Penthouse Vista Panorámica",
    location: "Roosevelt, Punta del Este",
    price: "USD 1,200,000",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    beds: 3,
    baths: 3,
    area: "250 m²",
    type: "Venta",
  },
  {
    id: 5,
    title: "Chalet Mediterráneo",
    location: "La Barra",
    price: "USD 950,000",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop",
    beds: 4,
    baths: 3,
    area: "280 m²",
    type: "Venta",
  },
  {
    id: 6,
    title: "Departamento Playa Mansa",
    location: "Playa Mansa, Punta del Este",
    price: "USD 650,000",
    image: depto,
    beds: 2,
    baths: 2,
    area: "120 m²",
    type: "Venta",
  },
];

export function Properties() {
  const [filter, setFilter] = useState("Todos");
  const [currentPage, setCurrentPage] = useState(1);

  const propertiesPerPage = 4;

  const totalPages = Math.ceil(
    properties.length / propertiesPerPage
  );

  const currentProperties = properties.slice(
    (currentPage - 1) * propertiesPerPage,
    currentPage * propertiesPerPage
  );

  const filters = ["Todos", "Venta", "Alquiler", "Temporal"];

  return (
    <section className="py-20 bg-[#F4EFE7] rounded-md" id="propiedades">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-gray-700 mb-4">
            Propiedades Destacadas
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Descubrí las mejores oportunidades inmobiliarias en Punta del Este.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === f
                    ? "bg-[#7EC8E3] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {f}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              flex items-center gap-2
              px-6 py-2
              bg-white
              rounded-full
              border border-gray-200
            "
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filtros
          </motion.button>
        </div>

        {/* Layout principal */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cards */}
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-5 h-[620px] auto-rows-fr content-start ">
              {currentProperties.map((property, index) => (
                <motion.div
                  key={property.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  <PropertyCard {...property} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div className="lg:col-span-1 flex">
            <div className="sticky top-28 w-full h-full">
              <div className="overflow-hidden rounded-[24px] shadow-2xl ">
                <iframe
                  title="Mapa Punta del Este"
                  src="https://maps.google.com/maps?q=Punta%20del%20Este&t=&z=15&ie=UTF8&iwloc=&output=embed"
                   className="w-full h-[620px] border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-3 mt-10"
        >
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="
            px-4 py-2
            bg-white
            rounded-md
            disabled:opacity-40
            "
          >
            ←
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`
              w-10 h-10 rounded-full transition-all
            ${
              currentPage === index + 1
            ? "bg-[#7EC8E3] text-white"
            : "bg-white text-black"
            }
          `}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="
            px-4 py-2
            bg-white
            rounded-md
            disabled:opacity-40
            "
          >
            →
          </button>
        </motion.div>

        {/* CTA 
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4
              bg-[#1a1a1a]
              text-white
              rounded-xl
              hover:bg-[#2a2a2a]
              transition-all
            "
          >
            Ver Todas las Propiedades
          </motion.button>
        </motion.div>*/}
      </div>
    </section>
  );
}