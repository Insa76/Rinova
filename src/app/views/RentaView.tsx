import { motion } from "motion/react";

import rentaHero from "../../assets/images/experiences/rentaHero.jpeg";

interface RentaViewProps {
  onBack: () => void;
}

export function RentaView({
  onBack,
}: RentaViewProps) {
  return (
    <motion.div
      layoutId="experience-renta"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="min-h-screen bg-[#F4EFE7]"
    >
      {/* HERO */}
<section className="px-8 pt-8">
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
      src={rentaHero}
      alt="Renta Inteligente"
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
        Renta Inteligente
      </h1>

      <p
        className="
          text-white/80
          mt-4
          max-w-2xl
          text-lg
        "
      >
        Transformamos propiedades en ingresos.
        Nos ocupamos de la operación, la atención
        al huésped y la optimización de rentabilidad
        para maximizar resultados.
      </p>
    </div>
  </div>
</section>

      {/* MÉTRICAS */}
      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black text-white rounded-[32px] p-10">
              <div className="text-6xl font-bold mb-4">
                92%
              </div>

              <div className="text-xl">
                Ocupación Promedio
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-10 shadow-xl">
              <div className="text-6xl font-bold mb-4">
                +37%
              </div>

              <div className="text-xl">
                Rentabilidad
              </div>
            </div>

            <div className="bg-white rounded-[32px] p-10 shadow-xl">
              <div className="text-6xl font-bold mb-4">
                24/7
              </div>

              <div className="text-xl">
                Atención al Huésped
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARATIVA */}
      <section className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl mb-10">
            Antes vs Después
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[32px] p-10 shadow-xl">
              <h3 className="text-3xl mb-8">
                Gestión Tradicional
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>❌ Baja ocupación</li>
                <li>❌ Reservas manuales</li>
                <li>❌ Sin estrategia de precios</li>
                <li>❌ Atención limitada</li>
                <li>❌ Poco control de resultados</li>
              </ul>
            </div>

            <div className="bg-black text-white rounded-[32px] p-10 shadow-xl">
              <h3 className="text-3xl mb-8">
                Con Rinova
              </h3>

              <ul className="space-y-4">
                <li>✓ Optimización de ocupación</li>
                <li>✓ Gestión integral</li>
                <li>✓ Pricing dinámico</li>
                <li>✓ Atención al huésped</li>
                <li>✓ Reportes y métricas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-4xl mb-10">
            Qué hacemos
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Reservas",
              "Check-In",
              "Mantenimiento",
              "Atención al Huésped",
            ].map((item) => (
              <div
                key={item}
                className="
                  bg-white
                  rounded-[24px]
                  p-8
                  shadow-lg
                "
              >
                <h3 className="text-xl">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULADORA */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto bg-white rounded-[40px] p-12 shadow-xl">
          <h2 className="font-heading text-4xl mb-6">
            ¿Cuánto podría generar tu propiedad?
          </h2>

          <p className="text-gray-600 mb-10">
            Estimación rápida de potencial de renta.
          </p>

          <div className="grid md:grid-cols-4 gap-4">
            <input
              placeholder="Zona"
              className="
                bg-[#F4EFE7]
                rounded-xl
                px-4
                py-3
                outline-none
              "
            />

            <input
              placeholder="Dormitorios"
              className="
                bg-[#F4EFE7]
                rounded-xl
                px-4
                py-3
                outline-none
              "
            />

            <input
              placeholder="Temporada"
              className="
                bg-[#F4EFE7]
                rounded-xl
                px-4
                py-3
                outline-none
              "
            />

            <button
              className="
                bg-black
                text-white
                rounded-xl
                px-4
                py-3
              "
            >
              Calcular
            </button>
          </div>

          <div className="mt-10 bg-black text-white rounded-[24px] p-8">
            <div className="text-sm opacity-70 mb-2">
              Ingreso estimado anual
            </div>

            <div className="text-5xl font-bold">
              USD 28.000
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}