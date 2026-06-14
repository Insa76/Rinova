export interface Lead {
  id: string;

  profile: string;

  score: number;

  name: string;

  phone: string;

  email: string;

  intent: string;

  budget: string;

  goal: string;

  zone: string;

  summary: string;

  conversation: string[];

   status:
    | "new"
    | "contacted"
    | "closed";

  notes: string;  

  createdAt: string;
}