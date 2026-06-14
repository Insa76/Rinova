export interface Property {
  id: string;

  title: string;

  description: string;

  price: number;

  location: string;

  bedrooms: number;

  bathrooms: number;

  area: number;

  image: string;

  status:
    | "available"
    | "reserved"
    | "sold";

  createdAt: string;
}