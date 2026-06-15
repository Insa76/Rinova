
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

  timeline: {
  date: string;
  event: string;
  }[];

   status:
    | "new"
    | "contacted"
    | "closed";

  notes: string; 
  
  leadType:
   | "INVESTOR"
   | "BUYER"
   | "SELLER"
   | "OWNER"
   | "PROSPECT";

  temperature:
   | "HOT"
   | "WARM"
   | "COLD";

  actionSuggestion: string;

  opportunityLevel:
   | "ALTO"
   | "MEDIO"
   | "INICIAL"; 

  createdAt: string;
}