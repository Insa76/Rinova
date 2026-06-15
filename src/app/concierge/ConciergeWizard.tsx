import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Lead } from "../types/Lead";
import { leadService } from "../services/leadService";
import { MessageBubble } from "../admin/components/MessageBubble";
import { useLanguage } from "../../context/LanguageContext";
import { conciergeTranslations } from "../../rinova/translations/concierge";

type Step =
  | "intent"
  | "budget"
  | "goal"
  | "zone"
  | "summary"
  | "contact"
  | "success";

export function ConciergeWizard() {
  const { language } = useLanguage();

  const t = conciergeTranslations[language];

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

  const [conversation, setConversation] = useState<string[]>([]);

  const updateLead = (field: string, value: string) => {
    setLead((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const addConversation = (speaker: string, message: string) => {
    setConversation((prev) => [...prev, `${speaker}: ${message}`]);
  };

  const calculateScore = () => {
    let score = 50;

    if (lead.intent === "INVEST") {
      score += 15;
    }

    if (
  lead.budget === "300K_1M" ||
  lead.budget === "OVER_1M"
) {
      score += 20;
    }

    if (
  lead.zone === "JOSE_IGNACIO" ||
  lead.zone === "BRAVA"
) {
      score += 10;
    }

    if (
  lead.goal === "INCOME" ||
  lead.goal === "APPRECIATION"
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

  const generateLeadType = () => {
    switch (lead.intent) {
      case "INVEST":
        return "INVESTOR";

      case "BUY":
        return "BUYER";

      case "SELL":
        return "SELLER";

      case "RENT":
        return "OWNER";

      case "MANAGEMENT":
        return "OWNER";

      default:
        return "PROSPECT";
    }
  };

  const getAIAnalysis = () => {
    if (language === "en") {
      if (profile === "Inversor Premium") {
        return `
I detected a high-opportunity profile.

Your budget, objectives and preferred area suggest strong compatibility with premium investment strategies.
`;
      }

      if (profile === "Inversor Calificado") {
        return `
I detected a profile with strong investment potential.

There are opportunities compatible with your objectives that could generate value in the medium and long term.
`;
      }

      return `
I detected a profile with development potential.

I recommend a deeper evaluation together with a specialist advisor.
`;
    }

    if (profile === "Inversor Premium") {
      return `
Detecté un perfil de alta oportunidad.

Tu combinación de presupuesto, objetivos y zona de interés sugiere potencial para estrategias de inversión premium.
`;
    }

    if (profile === "Inversor Calificado") {
      return `
Detecté un perfil con buenas oportunidades de inversión.

Existen activos compatibles con tus objetivos que podrían generar valor a mediano y largo plazo.
`;
    }

    return `
Detecté un perfil con potencial de desarrollo.

Recomiendo profundizar el análisis junto a un asesor.
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
    if (language === "en") {
      switch (lead.intent) {
        case "INVEST":
          return [
            "Income producing properties",
            "Playa Brava",
            "Peninsula",
            "Premium assets",
          ];

        case "BUY":
          return [
            "Permanent residence",
            "Playa Mansa",
            "Family-oriented areas",
            "High construction quality",
          ];

        case "RENT":
          return [
            "Property Management",
            "Short-term rentals",
            "Occupancy optimization",
            "Operational automation",
          ];

        default:
          return ["Personalized advisory", "Opportunity analysis"];
      }
    }

    switch (lead.intent) {
      case "INVEST":
        return [
          "Propiedades con renta comprobada",
          "Playa Brava",
          "Península",
          "Activos premium",
        ];

      case "BUY":
        return [
          "Vivienda permanente",
          "Playa Mansa",
          "Barrios familiares",
          "Alta calidad constructiva",
        ];

      case "RENT":
        return [
          "Property Management",
          "Alquiler temporal",
          "Optimización de ocupación",
          "Automatización operativa",
        ];

      case "MANAGEMENT":
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
      score >= 85 ? "ALTO" : score >= 70 ? "MEDIO" : "INICIAL";

    return `
Lead interesado en ${getIntentLabel()}.

Objetivo principal: ${getGoalLabel()}.

Zona de interés: ${getZoneLabel()}.

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

  const generateTemperature = () => {
    if (score >= 85) {
      return "HOT";
    }

    if (score >= 70) {
      return "WARM";
    }

    return "COLD";
  };

  const generateActionSuggestion = () => {
    if (score >= 90) {
      return "Contactar inmediatamente.";
    }

    if (score >= 70) {
      return "Agendar llamada dentro de las próximas 24 horas.";
    }

    return "Mantener seguimiento comercial.";
  };

  const generateOpportunityLevel = () => {
    if (score >= 85) {
      return "ALTO";
    }

    if (score >= 70) {
      return "MEDIO";
    }

    return "INICIAL";
  };

  const saveLead = async () => {
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

      timeline: [
        {
          date: new Date().toISOString(),
          event: "Lead creado por Concierge IA",
        },
      ],

      leadType: generateLeadType(),

      temperature: generateTemperature(),

      actionSuggestion: generateActionSuggestion(),

      opportunityLevel: generateOpportunityLevel(),

      summary: generateSummary(),

      status: "new",

      notes: "",

      createdAt: new Date().toISOString(),
    };

    try {
      await leadService.saveLead(newLead);

      console.log("LEAD GUARDADO");

      setStep("success");
    } catch (error) {
      console.error("ERROR GUARDANDO LEAD", error);
    }
  };

  const generateAnalysis = () => {
    if (language === "en") {
      if (lead.intent === "INVEST") {
        return `
I detected an interest in real estate investment focused on value generation.

The selected budget, objectives and location indicate compatibility with investment opportunities in Punta del Este.

My recommendation is to schedule a personalized evaluation with a specialist.
`;
      }

      if (lead.intent === "BUY") {
        return `
I detected an interest in acquiring a property for personal or investment purposes.

The information provided allows us to identify opportunities aligned with your objectives.

My recommendation is to move forward with a personalized property selection.
`;
      }

      if (lead.intent === "RENT") {
        return `
I detected an objective focused on maximizing property profitability.

There are management and operational strategies that can significantly improve occupancy and returns.

My recommendation is to analyze the property's rental potential with Rinova.
`;
      }

      return `
I analyzed the information provided and identified opportunities aligned with your objectives.

My recommendation is to continue with a personalized review together with the Rinova team.
`;
    }

    // ESPAÑOL

    if (lead.intent === "INVEST") {
      return `
Detecté interés en inversión inmobiliaria orientada a generación de valor.

La combinación de presupuesto, objetivos y zona seleccionada indica compatibilidad con oportunidades de inversión dentro de Punta del Este.

Mi recomendación es realizar una evaluación personalizada con un especialista para identificar activos alineados con tu estrategia patrimonial.
`;
    }

    if (lead.intent === "BUY") {
      return `
Detecté interés en adquisición de propiedad para uso personal o patrimonial.

La información compartida permite identificar alternativas compatibles con tus objetivos y preferencias de ubicación.

Mi recomendación es avanzar con una selección personalizada de oportunidades.
`;
    }

    if (lead.intent === "RENT") {
      return `
Detecté una necesidad orientada a maximizar la rentabilidad de una propiedad.

Existen estrategias de operación y gestión que podrían mejorar significativamente la ocupación y el rendimiento del activo.

Mi recomendación es analizar el potencial de renta junto al equipo de Rinova.
`;
    }

    return `
He analizado la información compartida y considero que existen oportunidades compatibles con los objetivos planteados.

Mi recomendación es avanzar con una revisión personalizada junto al equipo de Rinova.
`;
  };

  const getIntentLabel = () =>
  t.intents.find(
    (i) => i.value === lead.intent
  )?.label ?? lead.intent;

const getGoalLabel = () =>
  t.goals.find(
    (i) => i.value === lead.goal
  )?.label ?? lead.goal;

const getZoneLabel = () =>
  t.zones.find(
    (i) => i.value === lead.zone
  )?.label ?? lead.zone;

const getBudgetLabel = () =>
  t.budgets.find(
    (i) => i.value === lead.budget
  )?.label ?? lead.budget;  

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
            {t.title}
          </h2>

          <p className="text-gray-500 mt-3">{t.subtitle}</p>
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
                <div className="whitespace-pre-line">{t.welcomeMessage}</div>
              </MessageBubble>
              <h3 className="text-2xl mb-6">{t.intentQuestion}</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {t.intents.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      updateLead("intent", item.value);

                      addConversation(
                        language === "en" ? "User" : "Usuario",
                        item.label,
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
                    {item.label}
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
                <div className="whitespace-pre-line">{t.budgetMessage}</div>
              </MessageBubble>
              <h3 className="text-2xl mb-6">{t.budgetQuestion}</h3>

              <div className="grid gap-4">
                {t.budgets.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      updateLead("budget", item.value);
                      addConversation(
                        language === "en" ? "User" : "Usuario",
                        item.label,
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
                    {item.label}
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
                <div className="whitespace-pre-line">{t.goalMessage}</div>
              </MessageBubble>
              <h3 className="text-2xl mb-6">{t.goalQuestion}</h3>

              <div className="grid gap-4">
                {t.goals.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      updateLead("goal", item.value);

                      addConversation("Usuario", item.label);
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
                    {item.label}
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
              <MessageBubble>
                <div className="whitespace-pre-line">{t.zoneMessage}</div>
              </MessageBubble>
              <h3 className="text-2xl mb-6">{t.zoneQuestion}</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {t.zones.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      updateLead("zone", item.value);

                      addConversation("Usuario", item.label);
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
                    {item.label}
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
                <div className="whitespace-pre-line">{t.summaryMessage}</div>
              </MessageBubble>

              <h3 className="text-3xl mb-4">{t.summaryTitle}</h3>

              <p className="text-gray-500 mb-8">{t.summarySubtitle}</p>

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
                    ✓ {t.premiumProfile}
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
                    ✓ {t.alignedGoals}
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
                    ✓ {t.highPotentialZone}
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
                    {t.opportunityLevel}
                  </div>

                  <div className="text-5xl font-heading">
                    {score >= 85 ? "ALTO" : score >= 70 ? "MEDIO" : "INICIAL"}
                  </div>

                  <p className="mt-4 text-white/70">
                    {t.opportunityDescription}
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
                    {t.priority} {getPriority().label}
                  </span>
                </div>

                <div className="space-y-3 text-lg">
                  <p>
                    <strong>{t.interestLabel}:</strong> {getIntentLabel()}
                  </p>

                  <p>
                    <strong>{t.budgetLabel}:</strong> {getBudgetLabel()}
                  </p>

                  <p>
                    <strong>{t.goalLabel}:</strong> {getGoalLabel()}
                  </p>

                  <p>
                    <strong>{t.zoneLabel}:</strong> {getZoneLabel()}
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
                  <h3 className="text-2xl mb-4">{t.analysisTitle}</h3>

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
                  <h3 className="text-xl mb-4">{t.analysisTitle}</h3>

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
                  {t.restart}
                </button>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl mb-4">{t.recommendationTitle}</h3>

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
                <h3 className="text-2xl mb-3">{t.nextStep}</h3>

                <p className="text-white/70">{t.nextStepText}</p>
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
                <div className="whitespace-pre-line">{t.contactMessage}</div>
              </MessageBubble>
              <h3 className="text-3xl mb-8">{t.contactTitle}</h3>

              <div className="space-y-4">
                <input
                  placeholder={t.contactName}
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
                  placeholder={t.contactPhone}
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
                  placeholder={t.contactEmail}
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
                {t.requestAdvisor}
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
                  {t.successTitle}
                </h2>

                <p
                  className="
                  text-xl
                  text-gray-600
                  max-w-2xl
                  mx-auto
                  whitespace-pre-line
                  "
                >
                  {lead.name && `${lead.name}\n\n`}
                  {t.successMessage}
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
                  {t.startAgain}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
