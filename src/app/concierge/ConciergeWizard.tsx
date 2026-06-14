import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Lead } from "../types/Lead";
import { leadService } from "../services/leadService";
import { MessageBubble } from "../admin/components/MessageBubble";

type Step =
  | "intent"
  | "budget"
  | "goal"
  | "zone"
  | "summary"
  | "contact"
  | "success";

export function ConciergeWizard() {
  const [step, setStep] = useState<Step>("intent");

  const [lead, setLead] = useState({
    intent: "",
    budget: "",
    goal: "",
    zone: "",
    name: "",
    phone: "",
    email: "",
  });

  const [conversation, setConversation] =
  useState<string[]>([]);

  const updateLead = (field: string, value: string) => {
    setLead((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addConversation = (
  speaker: string,
  message: string
) => {
  setConversation((prev) => [
    ...prev,
    `${speaker}: ${message}`,
  ]);
};

  const calculateScore = () => {
    let score = 50;

    if (lead.intent === "Invertir") score += 15;

    if (lead.budget === "USD 300.000 - 1M" || lead.budget === "Más de USD 1M") {
      score += 20;
    }

    if (lead.zone === "José Ignacio" || lead.zone === "Playa Brava") {
      score += 10;
    }

    if (lead.goal === "Renta" || lead.goal === "Revalorización") {
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

  const getAIAnalysis = () => {
    if (profile === "Inversor Premium") {
      return `
    Detecté un perfil de alta oportunidad.

    Tu combinación de presupuesto,
    objetivos y zona de interés sugiere
    potencial para estrategias de inversión
    premium y generación de renta.
    `;
    }

    if (profile === "Inversor Calificado") {
      return `
    Detecté un perfil con buenas oportunidades
    de inversión.

    Existen activos compatibles con tus
    objetivos que podrían generar valor
    a mediano y largo plazo.
    `;
    }

    return `
  Detecté un perfil con potencial de desarrollo.

  Recomiendo profundizar el análisis junto
  a un asesor para identificar oportunidades
  alineadas con tus objetivos.
  `;
  };

  const getPriority = () => {
    if (score >= 90) {
      return {
        label: "ALTA",
        color: "bg-green-600",
      };
    }

    if (score >= 70) {
      return {
        label: "MEDIA",
        color: "bg-yellow-500",
      };
    }

    return {
      label: "BAJA",
      color: "bg-red-500",
    };
  };

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
        return ["Asesoramiento personalizado", "Análisis de oportunidades"];
    }
  };

  const generateSummary = () => {
  const opportunity =
    score >= 85
      ? "ALTO"
      : score >= 70
      ? "MEDIO"
      : "INICIAL";

  return `
Lead interesado en ${lead.intent.toLowerCase()}.

Objetivo principal: ${lead.goal}.

Zona de interés: ${lead.zone}.

Presupuesto: ${lead.budget}.

Nivel de oportunidad: ${opportunity}.

Recomendación SofIA:
${
  score >= 85
    ? "Contactar prioritariamente."
    : score >= 70
    ? "Agendar contacto dentro de las próximas 24 horas."
    : "Mantener seguimiento y profundizar necesidades."
}
`;
};

  const saveLead = () => {
    const newLead: Lead = {
      id: crypto.randomUUID(),

      profile,

      score,

      name: lead.name,

      phone: lead.phone,

      email: lead.email,

      intent: lead.intent,

      budget: lead.budget,

      goal: lead.goal,

      zone: lead.zone,

      conversation,

      summary: generateSummary(),

      status: "new",

      notes: "",

      createdAt: new Date().toISOString(),
    };

    leadService.saveLead(newLead);

    setStep("success");
  };


  const generateAnalysis = () => {
  if (lead.intent === "Invertir") {
    return `
Detecté interés en inversión inmobiliaria orientada a generación de valor.

La combinación de presupuesto, objetivos y zona seleccionada indica compatibilidad con oportunidades de inversión dentro de Punta del Este.

Mi recomendación es realizar una evaluación personalizada con un especialista para identificar activos alineados con tu estrategia patrimonial.
`;
  }

  if (lead.intent === "Comprar") {
    return `
Detecté interés en adquisición de propiedad para uso personal o patrimonial.

La información compartida permite identificar alternativas compatibles con tus objetivos y preferencias de ubicación.

Mi recomendación es avanzar con una selección personalizada de oportunidades.
`;
  }

  if (lead.intent === "Generar renta") {
    return `
Detecté una necesidad orientada a maximizar la rentabilidad de una propiedad.

Existen estrategias de operación y gestión que podrían mejorar significativamente la ocupación y el rendimiento del activo.

Mi recomendación es analizar el potencial de renta junto al equipo de Rinova.
`;
  }

  if (lead.intent === "Administrar una propiedad") {
    return `
Identifiqué una necesidad vinculada a administración y preservación de activos inmobiliarios.

La gestión profesional permite reducir incidencias operativas y mejorar la experiencia de propietarios e inquilinos.

Mi recomendación es evaluar una propuesta de Property Management personalizada.
`;
  }

  return `
He analizado la información compartida y considero que existen oportunidades compatibles con los objetivos planteados.

Mi recomendación es avanzar con una revisión personalizada junto al equipo de Rinova.
`;
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
            Voy a ayudarte a encontrar la mejor solución para tus objetivos
            inmobiliarios.
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
              <MessageBubble>
                Hola.
                <br />
                <br />
                Soy SofIA, Concierge IA de Rinova. Mi objetivo es ayudarte a
                identificar oportunidades inmobiliarias alineadas con tus
                objetivos.
                <br />
                <br />
                Comencemos.
              </MessageBubble>
              <h3 className="text-2xl mb-6">¿Qué te gustaría hacer?</h3>

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

  addConversation(
    "Usuario",
    `Interés: ${item}`
  );

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
              <MessageBubble>
                Excelente.
                <br />
                <br />
                Conocer tu presupuesto me ayuda a identificar oportunidades
                realmente compatibles con tu perfil.
              </MessageBubble>
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
                      addConversation(
  "Usuario",
  `Presupuesto: ${item}`
);
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
              <MessageBubble>
                Perfecto.
                <br />
                <br />
                Ahora necesito entender qué resultado esperás obtener para
                recomendar la mejor estrategia.
              </MessageBubble>
              <h3 className="text-2xl mb-6">¿Qué buscás principalmente?</h3>

              <div className="grid gap-4">
                {["Renta", "Revalorización", "Uso personal", "Uso mixto"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        updateLead("goal", item);
                        addConversation(
  "Usuario",
  `Objetivo: ${item}`
);
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
                  ),
                )}
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
              <MessageBubble>
                Punta del Este tiene mercados muy diferentes.
                <br />
                <br />
                Algunas zonas se destacan por renta, otras por revalorización y
                otras por calidad de vida.
              </MessageBubble>
              <h3 className="text-2xl mb-6">¿Qué zona te interesa?</h3>

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
                      addConversation(
  "Usuario",
  `Zona: ${item}`
);
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
              <MessageBubble>
                Ya tengo suficiente información.
                <br />
                <br />
                Analicé tu perfil y preparé una evaluación preliminar junto con
                recomendaciones alineadas a tus objetivos.
              </MessageBubble>

              <h3 className="text-3xl mb-4">Evaluación SofIA</h3>

              <p className="text-gray-500 mb-8">
                Analicé la información compartida y detecté una oportunidad
                compatible con tu perfil.
              </p>

              <div
                className="
                bg-[#F4EFE7]
                rounded-[32px]
                p-8
                "
              >
                <div className="space-y-4 mb-8">
                  <div
                    className="
      bg-white
      rounded-[20px]
      p-5
      border
      border-gray-200
    "
                  >
                    ✓ Perfil compatible con oportunidades premium de Rinova.
                  </div>

                  <div
                    className="
                    bg-white
                    rounded-[20px]
                    p-5
                    border
                    border-gray-200
                    "
                  >
                    ✓ Objetivos alineados con nuestra cartera de propiedades.
                  </div>

                  <div
                    className="
                    bg-white
                    rounded-[20px]
                    p-5
                    border
                    border-gray-200
                    "
                  >
                    ✓ Zona con potencial de desarrollo e inversión.
                  </div>
                </div>

                <div
                  className="
                  bg-black
                  text-white
                  rounded-[28px]
                  p-8
                  mb-8
                  "
                >
                  <div className="text-sm opacity-70 mb-2">
                    Nivel de oportunidad
                  </div>

                  <div className="text-5xl font-heading">
                    {score >= 85 ? "ALTO" : score >= 70 ? "MEDIO" : "INICIAL"}
                  </div>

                  <p className="mt-4 text-white/70">
                    Esta evaluación preliminar permite a nuestro equipo
                    identificar oportunidades compatibles con tus objetivos.
                  </p>
                </div>

                <div className="mt-6">
                  <span
                    className={`
                    inline-flex
                    px-4
                    py-2
                    rounded-full
                    text-white
                    text-sm
                    ${getPriority().color}
                  `}
                  >
                    Prioridad {getPriority().label}
                  </span>
                </div>

                <div className="space-y-3 text-lg">
                  <p>
                    <strong>Interés:</strong> {lead.intent}
                  </p>

                  <p>
                    <strong>Presupuesto:</strong> {lead.budget}
                  </p>

                  <p>
                    <strong>Objetivo:</strong> {lead.goal}
                  </p>

                  <p>
                    <strong>Zona:</strong> {lead.zone}
                  </p>
                </div>

                <div
  className="
    mt-8
    bg-white
    border
    border-gray-200
    rounded-[28px]
    p-8
  "
>
  <h3 className="text-2xl mb-4">
    Análisis SofIA
  </h3>

  <p className="leading-relaxed text-gray-700 whitespace-pre-line">
    {generateAnalysis()}
  </p>
</div>

                <div
                  className="
                  mt-8
                  bg-white
                  rounded-[24px]
                  p-6
                  border
                  border-gray-200
                  "
                >
                  <h3 className="text-xl mb-4">Análisis de SofIA</h3>

                  <p className="text-gray-600 leading-relaxed">
                    {getAIAnalysis()}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setStep("contact")}
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
                      name: "",
                      phone: "",
                      email: "",
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

              <div className="mt-8">
                <h3 className="text-2xl mb-4">Recomendación Rinova</h3>

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
                      <li key={item} className="flex items-center gap-3">
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
                <h3 className="text-2xl mb-3">Próximo Paso</h3>

                <p className="text-white/70">
                  Nuestro equipo puede revisar tu perfil y proponerte
                  oportunidades alineadas con tus objetivos.
                </p>
              </div>
            </motion.div>
          )}

          {step === "contact" && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <MessageBubble>
                Excelente.
                <br />
                <br />
                Ya tengo una evaluación preliminar. Para que un asesor
                especializado pueda revisar tu caso y contactarte, necesito
                algunos datos.
              </MessageBubble>
              <h3 className="text-3xl mb-8">Datos de contacto</h3>

              <div className="space-y-4">
                <input
                  placeholder="Nombre"
                  value={lead.name}
                  onChange={(e) => updateLead("name", e.target.value)}
                  className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  "
                />

                <input
                  placeholder="WhatsApp"
                  value={lead.phone}
                  onChange={(e) => updateLead("phone", e.target.value)}
                  className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  "
                />

                <input
                  placeholder="Email"
                  value={lead.email}
                  onChange={(e) => updateLead("email", e.target.value)}
                  className="
                  w-full
                  p-4
                  rounded-xl
                  border
                  "
                />
              </div>

              <button
                onClick={saveLead}
                className="
                mt-8
                px-8
                py-4
                bg-black
                text-white
                rounded-full
                "
              >
                Solicitar asesor
              </button>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div
                className="
                text-center
                py-12
                "
              >
                <div
                  className="
                  w-24
                  h-24
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  mx-auto
                  text-4xl
                  mb-8
                  "
                >
                  ✓
                </div>

                <h2
                  className="
                  font-heading
                  text-5xl
                  mb-6
                  "
                >
                  Perfil enviado
                </h2>

                <p
                  className="
                  text-xl
                  text-gray-600
                  max-w-2xl
                  mx-auto
                  "
                >
                  Gracias {lead.name}.
                  <br />
                  <br />
                  SofIA procesó tu perfil y lo envió al equipo de Rinova.
                  <br />
                  <br />
                  Un asesor especializado revisará tu caso y se pondrá en
                  contacto contigo.
                </p>

                <button
                  onClick={() => {
                    setLead({
                      intent: "",
                      budget: "",
                      goal: "",
                      zone: "",
                      name: "",
                      phone: "",
                      email: "",
                    });

                    setStep("intent");
                  }}
                  className="
                  mt-10
                  px-8
                  py-4
                  bg-black
                  text-white
                  rounded-full
                  "
                >
                  Comenzar nuevamente
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
