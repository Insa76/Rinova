import { useEffect, useState } from "react";

import { propertyService }
from "../services/propertyService";

import { leadService }
from "../services/leadService";

import { Lead }
from "../types/Lead";

export function DashboardView() {
  const [properties, setProperties] =
    useState(0);

  const [leads, setLeads] =
    useState(0);

  const [hotLeads, setHotLeads] =
    useState(0);

  const [warmLeads, setWarmLeads] =
    useState(0);

  const [coldLeads, setColdLeads] =
    useState(0);

  const [newLeads, setNewLeads] =
    useState(0);

  const [contactedLeads, setContactedLeads] =
    useState(0);

  const [closedLeads, setClosedLeads] =
    useState(0);

  const [topLeads, setTopLeads] =
  useState<Lead[]>([]);

  const [recentLeads, setRecentLeads] =
  useState<Lead[]>([]);

  const [activity, setActivity] =
  useState<any[]>([]);

  useEffect(() => {
  const loadDashboard = async () => {
    const propertiesData =
      propertyService.getProperties();

    const leadsData =
      await leadService.getLeads();

    setProperties(
      propertiesData.length
    );

    setLeads(
      leadsData.length
    );

    setHotLeads(
      leadsData.filter(
        (lead) =>
          lead.temperature === "HOT"
      ).length
    );

    setWarmLeads(
      leadsData.filter(
        (lead) =>
          lead.temperature === "WARM"
      ).length
    );

    setColdLeads(
      leadsData.filter(
        (lead) =>
          lead.temperature === "COLD"
      ).length
    );

    setNewLeads(
      leadsData.filter(
        (lead) =>
          lead.status === "new"
      ).length
    );

    setContactedLeads(
      leadsData.filter(
        (lead) =>
          lead.status === "contacted"
      ).length
    );

    setClosedLeads(
      leadsData.filter(
        (lead) =>
          lead.status === "closed"
      ).length
    );

    setTopLeads(
      [...leadsData]
        .sort(
          (a, b) =>
            b.score - a.score
        )
        .slice(0, 5)
    );

    setRecentLeads(
      [...leadsData]
        .sort(
          (a, b) =>
            new Date(
              b.createdAt
            ).getTime() -
            new Date(
              a.createdAt
            ).getTime()
        )
        .slice(0, 5)
    );

    const timeline =
      leadsData
        .sort(
          (a, b) =>
            new Date(
              b.createdAt
            ).getTime() -
            new Date(
              a.createdAt
            ).getTime()
        )
        .slice(0, 10)
        .map((lead) => ({
          id: lead.id,
          title:
            lead.temperature === "HOT"
              ? "Nuevo lead HOT"
              : "Nuevo lead",
          name: lead.name,
          date: lead.createdAt,
        }));

    setActivity(
      timeline
    );
  };

  loadDashboard();
}, []);

  

  const conversion =
    leads > 0
      ? Math.round(
          (closedLeads / leads) * 100
        )
      : 0;

  return (
    <div>
      <h1
        className="
          text-5xl
          font-heading
          mb-10
        "
      >
        Dashboard Ejecutivo
      </h1>

      {/* KPIs */}
      <div
        className="
          grid
          md:grid-cols-4
          gap-6
          mb-10
        "
      >
        <MetricCard
          title="Propiedades"
          value={properties}
        />

        <MetricCard
          title="Leads Totales"
          value={leads}
        />

        <MetricCard
          title="Conversión"
          value={`${conversion}%`}
        />

        <MetricCard
          title="Activas"
          value={properties}
        />
      </div>

      {/* TEMPERATURA */}
      <div className="mb-10">
        <h2
          className="
            text-2xl
            font-semibold
            mb-5
          "
        >
          Temperatura de Leads
        </h2>

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >
          <MetricCard
            title="HOT"
            value={hotLeads}
            color="bg-red-500"
          />

          <MetricCard
            title="WARM"
            value={warmLeads}
            color="bg-yellow-500"
          />

          <MetricCard
            title="COLD"
            value={coldLeads}
            color="bg-gray-500"
          />
        </div>
      </div>

      {/* ESTADO */}
      <div>
        <h2
          className="
            text-2xl
            font-semibold
            mb-5
          "
        >
          Estado Comercial
        </h2>

        <div
          className="
            grid
            md:grid-cols-3
            gap-6
          "
        >
          <MetricCard
            title="Nuevos"
            value={newLeads}
          />

          <MetricCard
            title="Contactados"
            value={contactedLeads}
          />

          <MetricCard
            title="Cerrados"
            value={closedLeads}
          />
        </div>
      </div>

      <div className="mt-12">
  <h2
    className="
      text-2xl
      font-semibold
      mb-5
    "
  >
    Top Leads Prioritarios
  </h2>

  <div className="space-y-4">
    {topLeads.map((lead) => (
      <div
        key={lead.id}
        className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
          flex
          justify-between
          items-center
        "
      >
        <div>
          <h3 className="font-semibold">
            {lead.name}
          </h3>

          <p className="text-gray-500">
            {lead.profile}
          </p>
        </div>

        <div className="text-right">
          <div
            className="
              text-3xl
              font-bold
            "
          >
            {lead.score}
          </div>

          <div
            className={`
              text-xs
              px-3
              py-1
              rounded-full
              text-white
              inline-flex

              ${
                lead.temperature === "HOT"
                  ? "bg-red-500"
                  : lead.temperature === "WARM"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }
            `}
          >
            {lead.temperature}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

   <div className="mt-12">
  <h2
    className="
      text-2xl
      font-semibold
      mb-5
    "
  >
    Últimos Leads
  </h2>

  <div className="space-y-4">
    {recentLeads.map((lead) => (
      <div
        key={lead.id}
        className="
          bg-white
          rounded-[24px]
          p-6
          shadow-lg
        "
      >
        <div className="flex justify-between">
          <div>
            <h3 className="font-semibold">
              {lead.name}
            </h3>

            <p className="text-gray-500">
              {lead.intent}
            </p>
          </div>

          <div className="text-sm text-gray-400">
            {new Date(
              lead.createdAt
            ).toLocaleDateString(
              "es-AR"
            )}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  <div className="mt-12">
  <h2
    className="
      text-2xl
      font-semibold
      mb-5
    "
  >
    Actividad Reciente
  </h2>

  <div
    className="
      bg-white
      rounded-[32px]
      p-8
      shadow-xl
    "
  >
    <div className="space-y-6">
      {activity.map((item) => (
        <div
          key={item.id}
          className="
            flex
            items-start
            gap-4
          "
        >
          <div
            className="
              w-3
              h-3
              rounded-full
              bg-black
              mt-2
            "
          />

          <div>
            <div className="font-medium">
              {item.title}
            </div>

            <div className="text-gray-500">
              {item.name}
            </div>

            <div className="text-xs text-gray-400 mt-1">
              {new Date(
                item.date
              ).toLocaleString(
                "es-AR"
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  color?: string;
}

function MetricCard({
  title,
  value,
  color,
}: MetricCardProps) {
  return (
    <div
      className="
        bg-white
        rounded-[32px]
        p-8
        shadow-xl
      "
    >
      <div className="flex items-center gap-3 mb-4">
        {color && (
          <div
            className={`
              w-3
              h-3
              rounded-full
              ${color}
            `}
          />
        )}

        <div className="text-gray-500">
          {title}
        </div>
      </div>

      <div
        className="
          text-5xl
          font-bold
        "
      >
        {value}
      </div>
    </div>
  );
}