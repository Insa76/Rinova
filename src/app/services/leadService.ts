import { Lead } from "../types/Lead";
import { supabase } from "../../lib/supabase";

export const leadService = {
  async getLeads(): Promise<Lead[]> {
    const { data, error } =
      await supabase
        .from("leads")
        .select("*")
        .order("created_at", {
          ascending: false,
        });

    if (error) {
  console.error(
    "SUPABASE INSERT ERROR:",
    error
  );

  throw error;
}

    return (data || []).map(
      (lead: any) => ({
        id: lead.id,

        name: lead.name,
        phone: lead.phone,
        email: lead.email,

        intent: lead.intent,
        budget: lead.budget,
        goal: lead.goal,
        zone: lead.zone,

        profile: lead.profile,
        leadType: lead.lead_type,
        temperature:
          lead.temperature,

        score: lead.score,

        summary: lead.summary,

        status: lead.status,
        notes: lead.notes,

        conversation:
          lead.conversation || [],

        timeline:
          lead.timeline || [],

        createdAt:
          lead.created_at,
      })
    );
  },

  async saveLead(
    lead: Lead
  ) {
    const { error } =
      await supabase
        .from("leads")
        .insert([
          {
            id: lead.id,

            name: lead.name,
            phone: lead.phone,
            email: lead.email,

            intent: lead.intent,
            budget: lead.budget,
            goal: lead.goal,
            zone: lead.zone,

            profile: lead.profile,

            lead_type:
              lead.leadType,

            temperature:
              lead.temperature,

            score: lead.score,

            summary:
              lead.summary,

            status: lead.status,

            notes:
              lead.notes,

            conversation:
              lead.conversation,

            timeline:
              lead.timeline,

            created_at:
              lead.createdAt,
          },
        ]);

    if (error) {
      console.error(error);
    }
  },

  async updateLead(
    id: string,
    updatedLead: Lead
  ) {
    const { error } =
      await supabase
        .from("leads")
        .update({
          status:
            updatedLead.status,

          notes:
            updatedLead.notes,
        })
        .eq("id", id);

    if (error) {
      console.error(error);
    }
  },

  async deleteLead(
    id: string
  ) {
    const { error } =
      await supabase
        .from("leads")
        .delete()
        .eq("id", id);

    if (error) {
      console.error(error);
    }
  },
};