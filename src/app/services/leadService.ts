import { Lead } from "../types/Lead";

const STORAGE_KEY = "rinova-leads";

export const leadService = {
  getLeads(): Lead[] {
    const data =
      localStorage.getItem(
        STORAGE_KEY
      );

    return data
      ? JSON.parse(data)
      : [];
  },

  saveLead(lead: Lead) {
    const leads =
      this.getLeads();

    leads.push(lead);

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(leads)
    );
  },

  deleteLead(id: string) {
    const leads =
      this.getLeads();

    const filtered =
      leads.filter(
        (lead) =>
          lead.id !== id
      );

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(filtered)
    );
  },
  updateLead(
  id: string,
  updatedLead: Lead
) {
  const leads =
    this.getLeads();

  const updated =
    leads.map((lead) =>
      lead.id === id
        ? updatedLead
        : lead
    );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
}
};