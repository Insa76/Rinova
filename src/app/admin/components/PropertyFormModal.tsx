import { useEffect, useState } from "react";
import { Property } from "../../types/Property";

interface PropertyFormModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (property: Property) => void;
  property?: Property | null;
}

export function PropertyFormModal({
  open,
  onClose,
  onSave,
  property,
}: PropertyFormModalProps) {
  const [formData, setFormData] =
    useState<Property>({
      id: "",
      title: "",
      description: "",
      price: 0,
      location: "",
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
      image: "",
      status: "available",
      createdAt: "",
    });

  const [imagePreview, setImagePreview] =
    useState("");

  useEffect(() => {
    if (property) {
      setFormData(property);
      setImagePreview(property.image);
    }
  }, [property]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      setImagePreview(result);

      setFormData((prev) => ({
        ...prev,
        image: result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    const propertyToSave: Property = {
      ...formData,
      id:
        formData.id ||
        crypto.randomUUID(),
      createdAt:
        formData.createdAt ||
        new Date().toISOString(),
    };

    onSave(propertyToSave);

    onClose();
  };

  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/50
        backdrop-blur-sm
        z-[9999]
        flex
        items-center
        justify-center
        p-6
      "
    >
      <div
        className="
          bg-white
          w-full
          max-w-4xl
          rounded-[32px]
          p-8
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <div className="flex justify-between mb-8">
          <h2 className="text-3xl font-heading">
            {property
              ? "Editar Propiedad"
              : "Nueva Propiedad"}
          </h2>

          <button
            onClick={onClose}
            className="text-xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <input
            name="title"
            placeholder="Título"
            value={formData.title}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            name="location"
            placeholder="Ubicación"
            value={formData.location}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            type="number"
            name="price"
            placeholder="Precio"
            value={formData.price}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            type="number"
            name="area"
            placeholder="m²"
            value={formData.area}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            type="number"
            name="bedrooms"
            placeholder="Dormitorios"
            value={formData.bedrooms}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <input
            type="number"
            name="bathrooms"
            placeholder="Baños"
            value={formData.bathrooms}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="
              bg-[#F4EFE7]
              rounded-xl
              p-4
            "
          >
            <option value="available">
              Disponible
            </option>

            <option value="reserved">
              Reservada
            </option>

            <option value="sold">
              Vendida
            </option>
          </select>

          <div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>

          <div className="md:col-span-2">
            <textarea
              name="description"
              placeholder="Descripción"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              className="
                w-full
                bg-[#F4EFE7]
                rounded-xl
                p-4
              "
            />
          </div>

          {imagePreview && (
            <div className="md:col-span-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="
                  w-full
                  h-[300px]
                  object-cover
                  rounded-[24px]
                "
              />
            </div>
          )}
        </div>

        <div className="flex gap-4 mt-8">
          <button
            onClick={handleSubmit}
            className="
              bg-black
              text-white
              px-8
              py-4
              rounded-full
            "
          >
            Guardar
          </button>

          <button
            onClick={onClose}
            className="
              border
              border-gray-300
              px-8
              py-4
              rounded-full
            "
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}