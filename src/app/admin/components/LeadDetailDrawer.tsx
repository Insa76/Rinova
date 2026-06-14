import { Lead } from "../../types/Lead";
import { useState, useEffect } from "react";

import { leadService } from "../../services/leadService";

interface Props {
  lead: Lead | null;
  onClose: () => void;
  onUpdated?: () => void;
}

export function LeadDetailDrawer({
  lead,
  onClose,
  onUpdated,
}: Props) {
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!lead) return;

    setStatus(lead.status);
    setNotes(lead.notes);
  }, [lead]);

  if (!lead) return null;

  const handleSave = () => {
    leadService.updateLead(lead.id, {
      ...lead,
      status: status as
        | "new"
        | "contacted"
        | "closed",
      notes,
    });

    onUpdated?.();

    alert("Lead actualizado");
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
      className="
        fixed
        right-0
        top-0
        h-full
        w-[500px]
        bg-white
        shadow-2xl
        z-50
        p-8
        overflow-y-auto
      "
    >
      <button
        onClick={onClose}
        className="
          mb-8
          text-gray-500
          hover:text-black
        "
      >
        ✕ Cerrar
      </button>

      <h2
        className="
          text-3xl
          font-heading
          mb-2
        "
      >
        {lead.name}
      </h2>

      <div className="text-sm text-gray-500 mb-6">
        {new Date(
          lead.createdAt
        ).toLocaleString("es-AR")}
      </div>

      <div className="space-y-6">
        <div>
          <strong>Perfil</strong>
          <p>{lead.profile}</p>
        </div>

        <div>
  <strong>Score</strong>

  <div className="mt-2">
    <div className="text-4xl font-bold">
      {lead.score}/100
    </div>

    <span
      className={`
        inline-flex
        px-3
        py-1
        rounded-full
        text-xs
        text-white
        mt-2
        ${getPriority().color}
      `}
    >
      Prioridad {getPriority().label}
    </span>
  </div>
</div>

        <div>
          <strong>WhatsApp</strong>
          <p>{lead.phone || "-"}</p>
        </div>

        <div>
          <strong>Email</strong>
          <p>{lead.email || "-"}</p>
        </div>

        {/* ACCIONES RÁPIDAS */}
        <div className="grid grid-cols-3 gap-3">
          <button
            disabled={!lead.phone}
            onClick={() =>
              window.open(
                `https://wa.me/${lead.phone.replace(
                  /\D/g,
                  ""
                )}`,
                "_blank"
              )
            }
            className="
              bg-green-500
              text-white
              py-3
              rounded-xl
              disabled:opacity-40
            "
          >
            WhatsApp
          </button>

          <button
            disabled={!lead.email}
            onClick={() =>
              window.open(
                `mailto:${lead.email}`
              )
            }
            className="
              bg-blue-500
              text-white
              py-3
              rounded-xl
              disabled:opacity-40
            "
          >
            Email
          </button>

          <button
            disabled={!lead.phone}
            onClick={() =>
              window.open(
                `tel:${lead.phone}`
              )
            }
            className="
              bg-black
              text-white
              py-3
              rounded-xl
              disabled:opacity-40
            "
          >
            Llamar
          </button>
        </div>

        <div>
          <strong>Intención</strong>
          <p>{lead.intent}</p>
        </div>

        <div>
          <strong>Presupuesto</strong>
          <p>{lead.budget}</p>
        </div>

        <div>
          <strong>Objetivo</strong>
          <p>{lead.goal}</p>
        </div>

        <div>
          <strong>Zona</strong>
          <p>{lead.zone}</p>
        </div>

        <div
  className="
    bg-[#F4EFE7]
    rounded-[24px]
    p-6
  "
>
  <strong>Resumen IA</strong>

   <div
  className="
    bg-black
    text-white
    rounded-[24px]
    p-6
  "
>
  <strong>
    Acción sugerida
  </strong>

  <p className="mt-3 text-white/70">
    {lead.score >= 90 &&
      "Contactar inmediatamente. Lead premium con alta probabilidad de conversión."}

    {lead.score >= 70 &&
      lead.score < 90 &&
      "Agendar contacto prioritario dentro de las próximas 24 horas."}

    {lead.score < 70 &&
      "Mantener seguimiento y profundizar necesidades antes de avanzar."}
  </p>
</div>

  <p className="mt-3 leading-relaxed">
    {lead.summary}
  </p>
</div>

        <div>
          <strong>Estado</strong>

          <select
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
            className="
              w-full
              mt-2
              bg-[#F4EFE7]
              rounded-xl
              p-3
              outline-none
            "
          >
            <option value="new">
              🟢 Nuevo
            </option>

            <option value="contacted">
              🟡 Contactado
            </option>

            <option value="closed">
              ⚫ Cerrado
            </option>
          </select>
        </div>

        <div>
          <strong>
            Notas internas
          </strong>

          <textarea
            rows={6}
            value={notes}
            onChange={(e) =>
              setNotes(
                e.target.value
              )
            }
            placeholder="
Agregar observaciones, llamadas realizadas,
acuerdos o próximos pasos...
"
            className="
              w-full
              mt-2
              bg-[#F4EFE7]
              rounded-xl
              p-4
              outline-none
              resize-none
            "
          />
        </div>

        <button
          onClick={handleSave}
          className="
            w-full
            bg-black
            text-white
            py-4
            rounded-full
            hover:opacity-90
            transition-all
          "
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}