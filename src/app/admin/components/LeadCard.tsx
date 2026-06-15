import { Lead } from "../../types/Lead";

interface LeadCardProps {
  lead: Lead;
  onSelect: (lead: Lead) => void;
}

export function LeadCard({
  lead,
  onSelect,
}: LeadCardProps) {
  const getStatusColor = () => {
    switch (lead.status) {
      case "new":
        return "bg-green-500";

      case "contacted":
        return "bg-yellow-500";

      case "closed":
        return "bg-gray-500";

      default:
        return "bg-gray-500";
    }
  };

  const getPriority = () => {
  if (lead.score >= 90) {
    return {
      label: "ALTA",
      color: "bg-green-600",
    };
  }

  if (lead.score >= 70) {
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

  return (
    <div
      onClick={() => onSelect(lead)}
      className="
        bg-white
        rounded-[28px]
        p-6
        shadow-lg
        cursor-pointer
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all
      "
    >
      <div className="flex justify-between mb-6">
        <div>
  <div className="text-sm text-gray-500">
    {lead.profile}
  </div>

  <div className="text-3xl font-bold">
    {lead.score}/100
  </div>

  <div className="mt-2">
    <span
      className={`
        inline-flex
        px-3
        py-1
        rounded-full
        text-xs
        text-white
        ${getPriority().color}
      `}
    >
      Prioridad {getPriority().label}
    </span>
  </div>
</div>

        <div
          className={`
            w-3
            h-3
            rounded-full
            ${getStatusColor()}
          `}
        />
      </div>

      <h3 className="text-xl font-semibold mb-1">
  {lead.name}
</h3>

<div className="flex gap-2 mb-3">
  <span
    className="
      text-xs
      px-3
      py-1
      rounded-full
      bg-black
      text-white
    "
  >
    {lead.leadType}
  </span>

  <span
    className={`
      text-xs
      px-3
      py-1
      rounded-full
      text-white

      ${
        lead.temperature === "HOT"
          ? "bg-red-600"
          : lead.temperature === "WARM"
          ? "bg-yellow-500"
          : "bg-gray-500"
      }
    `}
  >
    {lead.temperature}
  </span>
</div>

<div
  className="
    text-xs
    text-gray-500
    mt-2
  "
>
  {lead.actionSuggestion}
</div>

<div className="text-sm text-gray-500 mb-3">
  {lead.email || lead.phone}
</div>

      <p className="text-gray-500 mb-4">
        {lead.zone}
      </p>

      <div className="space-y-2 text-sm">
        <div>
          <strong>Objetivo:</strong>{" "}
          {lead.goal}
        </div>

        <div>
          <strong>Presupuesto:</strong>{" "}
          {lead.budget}
        </div>

        <div>
          <strong>Intención:</strong>{" "}
          {lead.intent}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t">
        <span className="text-sm text-black font-medium">
          Ver detalle →
        </span>
      </div>
    </div>
  );
}