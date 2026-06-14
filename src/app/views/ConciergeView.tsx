import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { ExperienceHero } from "../components/experience/ExperienceHero";
import { ConciergeWizard } from "../concierge/ConciergeWizard";

import conciergeHero from "../../assets/images/experiences/conciergeHero.jpeg";

export function ConciergeView() {
  const navigate = useNavigate();

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
        onBack={() => navigate("/")}
      />

      {/* CONCIERGE */}
      <section className="px-8 py-20">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="font-heading text-5xl mb-4">
            Contanos qué estás buscando
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Concierge IA te guiará paso a paso para comprender
            tus objetivos, identificar oportunidades y conectarte
            con el equipo adecuado.
          </p>
        </div>

        <ConciergeWizard />
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
                Identificamos automáticamente el perfil,
                objetivos y necesidades para brindar una
                experiencia mucho más personalizada.
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
                Disponible en cualquier momento para orientar
                decisiones, responder consultas y detectar
                oportunidades.
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
                El equipo recibe información estructurada,
                priorizada y lista para actuar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Los potencia. Identifica oportunidades,
            estructura información, prioriza consultas
            y permite que el equipo dedique su tiempo
            a generar resultados.
          </p>
        </div>
      </section>
    </motion.div>
  );
}