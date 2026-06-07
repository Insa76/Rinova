import { motion } from "motion/react";
import { useState } from "react";
import heroBg from "../../assets/images/C.png";

export function Hero() {
  const [propertyType, setPropertyType] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");

  return (
    <section
  className="relative px-4 pt-4 shadow-xl shadow-black/70"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
  }}
>
      {/* Overlay 
        <div className="absolute inset-0 bg-black/30" />*/}

      <div
         className="
    relative
    overflow-visible
    
    rounded-[32px]
    w-[85%]
    max-w-[1600px]
    mx-auto
    h-[650px]
    mt-24
  "
        style={{
          //backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay 
        <div className="absolute inset-0 bg-white/10 backdrop-blur-xs rounded-[32px]" />*/}

        {/* Contenido */}
        <div className="relative z-10 h-full flex flex-col justify-end px-10 py-40 md:px-16">
          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-3 mb-6"
          >

             {/*<p className="text-3xl md:text-3xl italic text-white/90 mb-2">
              Comprar. Vender. Alquilar.
            </p>
           <span className="bg-white text-black px-4 py-2 rounded-full text-sm">
              Casas
            </span>

            <span className="bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
              Apartamentos
            </span>

            <span className="bg-white/15 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm">
              Premium
            </span>*/}
          </motion.div>

          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <h1
  className="
    font-heading
    text-5xl
    md:text-6xl
    lg:text-8xl
    text-white
    tracking-tight
  "
>
              Propiedades de Alto Nivel       
              
            </h1>
          </motion.div>

          {/* Descripción 
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              text-white/90
              mt-6
              max-w-lg
              text-lg
              md:absolute
              md:right-16
              md:bottom-72
            "
          >
            Encontrá propiedades exclusivas, inversiones seguras y espacios
            diseñados para vivir experiencias únicas.
          </motion.p>*/}

          {/* Buscador */}
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.5 }}
  className="
    
    absolute
    left-1/2
    -translate-x-1/2
    bottom-[-90px]
    z-30
    w-[92%]
    max-w-7xl
  "
>
            <div className="bg-black/90 rounded-[28px] p-6 shadow-2xl ">
              <h3 className="text-3xl mb-6 text-white">
                Encontrá tu propiedad ideal
              </h3>

              <div className="grid md:grid-cols-5 gap-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">
                    Tipo
                  </label>

                  <input
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    placeholder="Casa, depto..."
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2">
                    Precio
                  </label>

                  <select
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  >
                    <option value="">Precio</option>
                    <option>USD 100.000+</option>
                    <option>USD 250.000+</option>
                    <option>USD 500.000+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2">
                    Ubicación
                  </label>

                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Punta del Este"
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400 block mb-2">
                    Ambientes
                  </label>

                  <select
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full bg-gray-100 rounded-xl px-4 py-3 outline-none"
                  >
                    <option value="">Habitaciones</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    className="
                      w-full
                      bg-black
                      text-white
                      py-3
                      rounded-full
                      border-2 border-white/30
                      hover:bg-neutral-800
                      transition-all
                    "
                  >
                    Buscar
                  </button>
                </div>
              </div>

              {/* Filtros rápidos 
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="text-sm text-gray-500">Filtros:</span>

                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  Ciudad
                </button>

                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  Casa
                </button>

                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  Premium
                </button>

                <button className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                  Apartamento
                </button>
              </div>*/}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="h-16" />
    </section>
  );
}