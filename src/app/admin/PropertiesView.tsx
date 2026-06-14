import { useEffect, useState } from "react";

import { Property } from "../types/Property";
import { propertyService } from "../services/propertyService";
import { PropertyFormModal } from "./components/PropertyFormModal";

export function PropertiesView() {
  const [properties, setProperties] =
    useState<Property[]>([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);   

  const loadProperties = () => {
    setProperties(
      propertyService.getProperties()
    );
  };

  useEffect(() => {
    loadProperties();
  }, []);

  const handleDelete = (
    id: string
  ) => {
    propertyService.deleteProperty(id);

    loadProperties();
  };

  const handleSaveProperty = (
  property: Property
) => {
  const exists = properties.find(
    (p) => p.id === property.id
  );

  if (exists) {
    propertyService.updateProperty(
      property.id,
      property
    );
  } else {
    propertyService.createProperty(
      property
    );
  }

  loadProperties();

  setSelectedProperty(null);

  setOpenModal(false);
};

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-10">
        <h1
          className="
            font-heading
            text-4xl
          "
        >
          Propiedades
        </h1>

        <button
  onClick={() => {
    setSelectedProperty(null);
    setOpenModal(true);
  }}
  className="
    bg-black
    text-white
    px-6
    py-3
    rounded-full
  "
>
  Nueva Propiedad
</button>
      </div>

      <div className="space-y-6">
        {properties.map(
          (property) => (
            <div
              key={property.id}
              className="
                bg-white
                rounded-[24px]
                p-6
                shadow-lg
              "
            >
              <div className="flex justify-between">
                <div>
                  <h2 className="text-2xl">
                    {property.title}
                  </h2>

                  <p className="text-gray-500">
                    {property.location}
                  </p>

                  <p className="mt-3">
                    USD{" "}
                    {property.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
  onClick={() => {
    setSelectedProperty(property);

    setOpenModal(true);
  }}
  className="
    border
    px-4
    py-2
    rounded-full
  "
>
  Editar
</button>

                  <button
                    onClick={() =>
                      handleDelete(
                        property.id
                      )
                    }
                    className="
                      bg-red-500
                      text-white
                      px-4
                      py-2
                      rounded-full
                    "
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          )
        )}

        {properties.length === 0 && (
          <div
            className="
              bg-white
              rounded-[24px]
              p-10
              text-center
            "
          >
            No hay propiedades cargadas.
          </div>
        )}
      </div>
      <PropertyFormModal
  open={openModal}
  property={selectedProperty}
  onClose={() => {
    setOpenModal(false);
    setSelectedProperty(null);
  }}
  onSave={handleSaveProperty}
/>
    </div>
    
  );
}