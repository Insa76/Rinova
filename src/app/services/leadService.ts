import { Lead } from "../types/Lead";

export const leadService = {
  saveLead(lead: Lead) {
    const existing = localStorage.getItem("rinova-leads");

    const leads: Lead[] = existing
      ? JSON.parse(existing)
      : [];

    leads.push(lead);

    localStorage.setItem(
      "rinova-leads",
      JSON.stringify(leads)
    );

    return lead;
  },

  getLeads(): Lead[] {
    const existing = localStorage.getItem(
      "rinova-leads"
    );

    return existing
      ? JSON.parse(existing)
      : [];
  },

  clear() {
    localStorage.removeItem(
      "rinova-leads"
    );
  },
};