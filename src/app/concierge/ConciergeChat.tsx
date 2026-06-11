import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Lead } from "../types/Lead";
import { leadService } from "../services/leadService";

type Step =
  | "intent"
  | "budget"
  | "goal"
  | "zone"
  | "summary";

export function ConciergeChat() {
  const [step, setStep] = useState<Step>("intent");

  const [lead, setLead] = useState({
    intent: "",
    budget: "",
    goal: "",
    zone: "",
  });

  const updateLead = (
    field: string,
    value: string
  ) => {
    setLead((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculateScore = () => {
  let score = 50;

  if (lead.intent === "Invertir") score += 15;

  if (
    lead.budget === "USD 300.000 - 1M" ||
    lead.budget === "Más de USD 1M"
  ) {
    score += 20;
  }

  if (
    lead.zone === "José Ignacio" ||
    lead.zone === "Playa Brava"
  ) {
    score += 10;
  }

  if (
    lead.goal === "Renta" ||
    lead.goal === "Revalorización"
  ) {
    score += 15;
  }

  return Math.min(score, 100);
};

  const score = calculateScore();

const profile =
  score > 85
    ? "Inversor Premium"
    : score > 70
    ? "Inversor Calificado"
    : "Cliente Potencial";

  const getRecommendation = () => {
  switch (lead.intent) {
    case "Invertir":
      return [
        "Propiedades con renta comprobada",
        "Playa Brava",
        "Península",
        "Activos premium",
      ];

    case "Comprar":
      return [
        "Vivienda permanente",
        "Playa Mansa",
        "Barrios familiares",
        "Alta calidad constructiva",
      ];

    case "Generar renta":
      return [
        "Property Management",
        "Alquiler temporal",
        "Optimización de ocupación",
        "Automatización operativa",
      ];

    case "Administrar una propiedad":
      return [
        "Inspecciones periódicas",
        "Mantenimiento preventivo",
        "Reportes digitales",
        "Coordinación integral",
      ];

    default:
      return [
        "Asesoramiento personalizado",
        "Análisis de oportunidades",
      ];
  }
};  

  const saveLead = () => {
  const lead: Lead = {
    id: crypto.randomUUID(),

    profile,

    score,

    intent: lead.intent,

    budget: lead.budget,

    goal: lead.goal,

    zone: lead.zone,

    createdAt: new Date().toISOString(),
  };

  leadService.saveLead(lead);

  alert(
    "Tu solicitud fue enviada correctamente."
  );
};

  return (
    <div
      className="
        max-w-4xl
        mx-auto
      "
    >
      <div
        className="
          bg-white
          rounded-[40px]
          shadow-xl
          p-10
        "
      >
        <div className="mb-8">
          <span
            className="
              text-sm
              uppercase
              tracking-[4px]
              text-gray-400
            "
          >
            Concierge IA
          </span>

          <h2
            className="
              font-heading
              text-4xl
              mt-4
            "
          >
            Hola, soy SofIA.
          </h2>

          <p className="text-gray-500 mt-3">
            Voy a ayudarte a encontrar la mejor
            solución para tus objetivos inmobiliarios.
          </p>
        </div>

        <AnimatePresence mode="wait">

          {step === "intent" && (
            <motion.div
              key="intent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl mb-6">
                ¿Qué te gustaría hacer?
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Comprar",
                  "Vender",
                  "Invertir",
                  "Generar renta",
                  "Administrar una propiedad",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      updateLead("intent", item);
                      setStep("budget");
                    }}
                    className="
                      p-5
                      bg-[#F4EFE7]
                      rounded-2xl
                      text-left
                      hover:bg-black
                      hover:text-white
                      transition-all
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "budget" && (
            <motion.div
              key="budget"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl mb-6">
                ¿Cuál es tu presupuesto estimado?
              </h3>

              <div className="grid gap-4">
                {[
                  "Menos de USD 100.000",
                  "USD 100.000 - 300.000",
                  "USD 300.000 - 1M",
                  "Más de USD 1M",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      updateLead("budget", item);
                      setStep("goal");
                    }}
                    className="
                      p-5
                      bg-[#F4EFE7]
                      rounded-2xl
                      text-left
                      hover:bg-black
                      hover:text-white
                      transition-all
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "goal" && (
            <motion.div
              key="goal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl mb-6">
                ¿Qué buscás principalmente?
              </h3>

              <div className="grid gap-4">
                {[
                  "Renta",
                  "Revalorización",
                  "Uso personal",
                  "Uso mixto",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      updateLead("goal", item);
                      setStep("zone");
                    }}
                    className="
                      p-5
                      bg-[#F4EFE7]
                      rounded-2xl
                      text-left
                      hover:bg-black
                      hover:text-white
                      transition-all
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "zone" && (
            <motion.div
              key="zone"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-2xl mb-6">
                ¿Qué zona te interesa?
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Península",
                  "Playa Mansa",
                  "Playa Brava",
                  "José Ignacio",
                  "No estoy seguro",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      updateLead("zone", item);
                      setStep("summary");
                    }}
                    className="
                      p-5
                      bg-[#F4EFE7]
                      rounded-2xl
                      text-left
                      hover:bg-black
                      hover:text-white
                      transition-all
                    "
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === "summary" && (
  <motion.div
    key="summary"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <h3 className="text-3xl mb-8">
      Perfil Detectado
    </h3>

    <div
      className="
        bg-[#F4EFE7]
        rounded-[32px]
        p-8
      "
    >
      <div className="mb-8">
        <span className="text-gray-500">
          Clasificación
        </span>

        <h2 className="text-4xl mt-2 font-heading">
          {profile}
        </h2>
      </div>

      <div className="mb-8">
        <span className="text-gray-500">
          Score de oportunidad
        </span>

        <h2 className="text-6xl font-heading">
          {score}/100
        </h2>
      </div>

      <div className="space-y-3 text-lg">
        <p>
          <strong>Interés:</strong>{" "}
          {lead.intent}
        </p>

        <p>
          <strong>Presupuesto:</strong>{" "}
          {lead.budget}
        </p>

        <p>
          <strong>Objetivo:</strong>{" "}
          {lead.goal}
        </p>

        <p>
          <strong>Zona:</strong>{" "}
          {lead.zone}
        </p>
      </div>
    </div>

    <div className="flex gap-4 mt-8">
  <button
  onClick={saveLead}
  className="
    px-8
    py-4
    bg-black
    text-white
    rounded-full
  "
>
  Solicitar asesor
</button>

  <button
    onClick={() => {
      setLead({
        intent: "",
        budget: "",
        goal: "",
        zone: "",
      });

      setStep("intent");
    }}
    className="
      px-8
      py-4
      border
      border-gray-300
      rounded-full
    "
  >
    Reiniciar
  </button>
</div>
  </motion.div>
)}

  <div className="mt-8">
  <h3 className="text-2xl mb-4">
    Recomendación Rinova
  </h3>

  <div
    className="
      bg-white
      rounded-[24px]
      p-6
      border
      border-gray-200
    "
  >
    <ul className="space-y-3">
      {getRecommendation().map((item) => (
        <li
          key={item}
          className="flex items-center gap-3"
        >
          <span>✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

    <div
  className="
    mt-8
    bg-black
    text-white
    rounded-[24px]
    p-6
  "
>
  <h3 className="text-2xl mb-3">
    Próximo Paso
  </h3>

  <p className="text-white/70">
    Nuestro equipo puede revisar tu perfil
    y proponerte oportunidades alineadas
    con tus objetivos.
  </p>
</div>

        </AnimatePresence>
      </div>
    </div>
  );
}