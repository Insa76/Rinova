import { useEffect, useState } from "react";

import { Lead } from "../types/Lead";
import { leadService } from "../services/leadService";

import { LeadCard } from "./components/LeadCard";
import { LeadDetailDrawer } from "./components/LeadDetailDrawer";

export function LeadsView() {
  const [leads, setLeads] =
    useState<Lead[]>([]);

  const [selectedLead, setSelectedLead] =
    useState<Lead | null>(null);

  const [filter, setFilter] =
    useState("all");

 useEffect(() => {
  const loadLeads = async () => {
    const data =
      await leadService.getLeads();

    setLeads(data);
  };

  loadLeads();
}, []);

  const newCount =
    leads.filter(
      (lead) =>
        lead.status === "new"
    ).length;

  const contactedCount =
    leads.filter(
      (lead) =>
        lead.status ===
        "contacted"
    ).length;

  const closedCount =
    leads.filter(
      (lead) =>
        lead.status ===
        "closed"
    ).length;

  const filteredLeads =
    filter === "all"
      ? leads
      : leads.filter(
          (lead) =>
            lead.status ===
            filter
        );

  const sortedLeads =
    [...filteredLeads].sort(
      (a, b) =>
        b.score - a.score
    );

  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1
          className="
            text-5xl
            font-heading
            mb-3
          "
        >
          Leads
        </h1>

        <p className="text-gray-500">
          Gestioná oportunidades,
          clientes potenciales y
          consultas generadas por
          Concierge IA.
        </p>
      </div>

      {/* MÉTRICAS */}
      <div
        className="
          grid
          md:grid-cols-3
          gap-6
          mb-10
        "
      >
        <div
          className="
            bg-white
            p-6
            rounded-[24px]
            shadow-lg
          "
        >
          <div className="text-sm text-gray-500">
            Nuevos
          </div>

          <div className="text-4xl font-bold">
            {newCount}
          </div>
        </div>

        <div
          className="
            bg-white
            p-6
            rounded-[24px]
            shadow-lg
          "
        >
          <div className="text-sm text-gray-500">
            Contactados
          </div>

          <div className="text-4xl font-bold">
            {contactedCount}
          </div>
        </div>

        <div
          className="
            bg-white
            p-6
            rounded-[24px]
            shadow-lg
          "
        >
          <div className="text-sm text-gray-500">
            Cerrados
          </div>

          <div className="text-4xl font-bold">
            {closedCount}
          </div>
        </div>
      </div>

      {/* FILTROS */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {[
          "all",
          "new",
          "contacted",
          "closed",
        ].map((item) => (
          <button
            key={item}
            onClick={() =>
              setFilter(item)
            }
            className={`
              px-5
              py-2
              rounded-full
              transition-all

              ${
                filter === item
                  ? "bg-black text-white"
                  : "bg-white shadow"
              }
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* LISTADO */}
      {leads.length === 0 ? (
        <div
          className="
            bg-white
            rounded-[32px]
            p-12
            shadow-lg
            text-center
          "
        >
          <h2 className="text-2xl mb-3">
            No hay leads todavía
          </h2>

          <p className="text-gray-500">
            Los leads generados desde
            Concierge IA aparecerán
            aquí automáticamente.
          </p>
        </div>
      ) : (
        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-6
          "
        >
          {sortedLeads.map(
            (lead) => (
              <LeadCard
                key={lead.id}
                lead={lead}
                onSelect={
                  setSelectedLead
                }
              />
            )
          )}
        </div>
      )}

      {/* DRAWER */}
      <LeadDetailDrawer
  lead={selectedLead}
  onClose={() =>
    setSelectedLead(null)
  }
  onUpdated={async () => {
    const data =
      await leadService.getLeads();

    setLeads(data);
  }}
/>
    </div>
  );
}