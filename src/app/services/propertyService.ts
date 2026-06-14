import { Property } from "../types/Property";

const STORAGE_KEY = "rinova-properties";

export const propertyService = {
  getProperties(): Property[] {
    const data = localStorage.getItem(
      STORAGE_KEY
    );

    return data ? JSON.parse(data) : [];
  },

  createProperty(property: Property) {
    const properties =
      this.getProperties();

    properties.push(property);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(properties)
    );

    return property;
  },

  updateProperty(
    id: string,
    updatedProperty: Property
  ) {
    const properties =
      this.getProperties();

    const newProperties =
      properties.map((property) =>
        property.id === id
          ? updatedProperty
          : property
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(newProperties)
    );
  },

  deleteProperty(id: string) {
    const properties =
      this.getProperties();

    const filtered =
      properties.filter(
        (property) =>
          property.id !== id
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(filtered)
    );
  },
};