import { motion } from "motion/react";

import { ExperienceHero } from "../components/experience/ExperienceHero";
import { ConciergeChat } from "../concierge/ConciergeChat";

import conciergeHero from "../../assets/images/experiences/conciergeHero.jpeg";

interface ConciergeViewProps {
  onBack: () => void;
}

export function ConciergeView({
  onBack,
}: ConciergeViewProps) {
  return (
    <motion.div
      layoutId="experience-concierge"
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
      <ExperienceHero
        title="Concierge IA"
        location="Rinova"
        subtitle="Una nueva forma de conectar personas, propiedades y oportunidades."
        image={conciergeHero}
        onBack={onBack}
      />

      {/* CHAT */}
      <section className="px-8 py-20">
        <ConciergeChat />
      </section>

      {/* BENEFICIOS */}
      <section className="px-8 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-5xl mb-4">
              ¿Por qué Concierge IA?
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Más que un formulario de contacto. Una experiencia guiada
              diseñada para entender tus objetivos y conectarte con la
              solución adecuada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-lg
              "
            >
              <h3 className="text-2xl mb-4">
                Perfilado Inteligente
              </h3>

              <p className="text-gray-600">
                Identificamos automáticamente el tipo de cliente,
                necesidades y prioridades para brindarte una mejor experiencia.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-lg
              "
            >
              <h3 className="text-2xl mb-4">
                Atención 24/7
              </h3>

              <p className="text-gray-600">
                Disponible en cualquier momento para responder consultas,
                orientar decisiones y generar oportunidades.
              </p>
            </div>

            <div
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-lg
              "
            >
              <h3 className="text-2xl mb-4">
                Leads Calificados
              </h3>

              <p className="text-gray-600">
                El equipo recibe información estructurada para intervenir
                sólo cuando realmente aporta valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIÓN FUTURA */}
      <section className="px-8 pb-24">
        <div
          className="
            max-w-7xl
            mx-auto
            bg-black
            text-white
            rounded-[40px]
            p-12
          "
        >
          <h2
            className="
              font-heading
              text-4xl
              mb-6
            "
          >
            El futuro de la atención inmobiliaria
          </h2>

          <p
            className="
              text-white/70
              text-lg
              max-w-3xl
            "
          >
            Concierge IA no reemplaza a los asesores.
            Los potencia.
            Filtra consultas, identifica oportunidades,
            organiza información y permite que el equipo
            dedique más tiempo a las conversaciones que
            realmente generan valor.
          </p>
        </div>
      </section>
    </motion.div>
  );
}