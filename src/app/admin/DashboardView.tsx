import { useEffect, useState } from "react";

import { propertyService }
from "../services/propertyService";

import { leadService }
from "../services/leadService";

export function DashboardView() {
  const [properties, setProperties] =
    useState(0);

  const [leads, setLeads] =
    useState(0);

  useEffect(() => {
    const propertyCount =
      propertyService.getProperties()
        .length;

    const leadCount =
      leadService.getLeads()
        .length;

    setProperties(
      propertyCount
    );

    setLeads(
      leadCount
    );
  }, []);

  const cards = [
    {
      title:
        "Propiedades",
      value:
        properties,
    },
    {
      title:
        "Leads",
      value:
        leads,
    },
    {
      title:
        "Consultas IA",
      value:
        0,
    },
    {
      title:
        "Activas",
      value:
        properties,
    },
  ];

  return (
    <div>
      <h1
        className="
          text-5xl
          font-heading
          mb-10
        "
      >
        Dashboard
      </h1>

      <div
        className="
          grid
          md:grid-cols-4
          gap-6
        "
      >
        {cards.map(
          (card) => (
            <div
              key={card.title}
              className="
                bg-white
                rounded-[32px]
                p-8
                shadow-xl
              "
            >
              <div
                className="
                  text-gray-500
                  mb-4
                "
              >
                {card.title}
              </div>

              <div
                className="
                  text-5xl
                  font-bold
                "
              >
                {card.value}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}