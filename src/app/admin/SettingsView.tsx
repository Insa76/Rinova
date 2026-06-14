import { useEffect, useState } from "react";

import { Settings }
from "../types/Settings";

import { settingsService }
from "../services/settingsService";

export function SettingsView() {
  const [settings, setSettings] =
    useState<Settings>({
      companyName: "",
      whatsapp: "",
      email: "",
      instagram: "",
      facebook: "",
      address: "",
    });

  useEffect(() => {
    setSettings(
      settingsService.getSettings()
    );
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSettings({
      ...settings,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSave = () => {
    settingsService.saveSettings(
      settings
    );

    alert(
      "Configuración guardada"
    );
  };

  return (
    <div>
      <h1
        className="
          text-5xl
          font-heading
          mb-10
        "
      >
        Configuración
      </h1>

      <div
        className="
          bg-white
          rounded-[32px]
          p-10
          shadow-xl
          max-w-3xl
        "
      >
        <div className="space-y-4">

          <input
            name="companyName"
            value={
              settings.companyName
            }
            onChange={handleChange}
            placeholder="Empresa"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <input
            name="whatsapp"
            value={
              settings.whatsapp
            }
            onChange={handleChange}
            placeholder="WhatsApp"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <input
            name="email"
            value={
              settings.email
            }
            onChange={handleChange}
            placeholder="Email"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <input
            name="instagram"
            value={
              settings.instagram
            }
            onChange={handleChange}
            placeholder="Instagram"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <input
            name="facebook"
            value={
              settings.facebook
            }
            onChange={handleChange}
            placeholder="Facebook"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <input
            name="address"
            value={
              settings.address
            }
            onChange={handleChange}
            placeholder="Dirección"
            className="
              w-full
              bg-[#F4EFE7]
              p-4
              rounded-xl
            "
          />

          <button
            onClick={handleSave}
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

        </div>
      </div>
    </div>
  );
}