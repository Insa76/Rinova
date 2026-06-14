import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

import { ExperienceHero } from "../components/experience/ExperienceHero";
import { ExperienceNavigator } from "../components/experience/ExperienceNavigator";
import { ExperienceCTA } from "../components/experience/ExperienceCTA";

import propertyManagementHero from "../../assets/images/experiences/manageHero.jpeg";


const phases = [
  {
    title: "Inspecciones",
    description:
      "Relevamientos periódicos del estado general de la propiedad.",
  },
  {
    title: "Mantenimiento",
    description:
      "Planificación preventiva para evitar deterioros y costos mayores.",
  },
  {
    title: "Coordinación",
    description:
      "Gestión integral de proveedores y servicios.",
  },
  {
    title: "Reportes",
    description:
      "Información clara con fotografías y seguimiento.",
  },
];

export function PropertyManagementView() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F4EFE7]">
      
      <ExperienceHero
  title="Property Management"
  location="Punta del Este"
  subtitle="Administramos propiedades como activos financieros de largo plazo."
  image={propertyManagementHero}
  onBack={() => navigate("/")}
/>

      <ExperienceNavigator
        items={[
          {
            id: "problema",
            label: "Problema",
          },
          {
            id: "proceso",
            label: "Proceso",
          },
          {
            id: "reportes",
            label: "Reportes",
          },
          {
            id: "beneficios",
            label: "Beneficios",
          },
          {
            id: "contacto",
            label: "Contacto",
          },
        ]}
      />

      <section className="px-8 py-16">
        <div className="max-w-7xl mx-auto">

          {/* PROBLEMA */}

          <div
            id="problema"
            className="mb-24 scroll-mt-32"
          >
            <h2 className="font-heading text-5xl mb-10">
              El desafío
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-[32px] p-10 shadow-lg">
                <h3 className="text-3xl mb-6">
                  Gestión Tradicional
                </h3>

                <ul className="space-y-4 text-gray-600">
                  <li>❌ Problemas inesperados</li>
                  <li>❌ Coordinación manual</li>
                  <li>❌ Falta de seguimiento</li>
                  <li>❌ Escasa información</li>
                  <li>❌ Menor preservación de valor</li>
                </ul>
              </div>

              <div className="bg-black text-white rounded-[32px] p-10">
                <h3 className="text-3xl mb-6">
                  Gestión Rinova
                </h3>

                <ul className="space-y-4">
                  <li>✓ Supervisión continua</li>
                  <li>✓ Gestión integral</li>
                  <li>✓ Reportes digitales</li>
                  <li>✓ Coordinación profesional</li>
                  <li>✓ Protección del activo</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PROCESO */}

          <div
            id="proceso"
            className="mb-24 scroll-mt-32"
          >
            <h2 className="font-heading text-5xl mb-10">
              Nuestro Proceso
            </h2>

            <div className="grid md:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-lg
                  "
                >
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-black
                      text-white
                      flex
                      items-center
                      justify-center
                      mb-6
                    "
                  >
                    {index + 1}
                  </div>

                  <h3 className="text-xl mb-4">
                    {phase.title}
                  </h3>

                  <p className="text-gray-600">
                    {phase.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* REPORTES */}

          <div
            id="reportes"
            className="mb-24 scroll-mt-32"
          >
            <div className="bg-white rounded-[40px] p-12 shadow-xl">
              <h2 className="font-heading text-5xl mb-8">
                Reportes Digitales
              </h2>

              <p className="text-gray-600 text-lg max-w-3xl">
                Recibí información clara sobre el estado
                de tu propiedad, tareas realizadas,
                observaciones y seguimiento de acciones.
              </p>
            </div>
          </div>

          {/* BENEFICIOS */}

          <div
            id="beneficios"
            className="mb-24 scroll-mt-32"
          >
            <h2 className="font-heading text-5xl mb-10">
              Beneficios
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Mayor control",
                "Menos preocupaciones",
                "Preservación del valor",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    bg-white
                    rounded-[32px]
                    p-8
                    shadow-lg
                  "
                >
                  <h3 className="text-2xl">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}

          <div
            id="contacto"
            className="scroll-mt-32"
          >
            <ExperienceCTA
              title="Solicitá un diagnóstico profesional"
              description="Analizamos tu propiedad y te mostramos cómo podemos ayudarte a preservarla y maximizar su valor."
              buttonText="Hablar con un asesor"
            />
          </div>

        </div>
      </section>
    </div>
  );
}