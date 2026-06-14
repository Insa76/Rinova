import { Settings } from "../types/Settings";

const STORAGE_KEY =
  "rinova-settings";

const defaultSettings: Settings = {
  companyName: "RINOVA",

  whatsapp:
    "+54 9 11 5341 3959",

  email:
    "contacto@rinova.com",

  instagram:
    "@rinova",

  facebook:
    "Rinova",

  address:
    "Punta del Este, Uruguay",
};

export const settingsService = {
  getSettings(): Settings {
    const data =
      localStorage.getItem(
        STORAGE_KEY
      );

    return data
      ? JSON.parse(data)
      : defaultSettings;
  },

  saveSettings(
    settings: Settings
  ) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(settings)
    );
  },
};