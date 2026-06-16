import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Footer() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  return (
    <section className="bg-[#F4EFE7] px-4 pb-4">
      <footer
        className="
          bg-white/40
          backdrop-blur-sm
          rounded-[32px]
          overflow-hidden
          border
          border-black/10
          shadow-xl
          shadow-black/10
          text-gray-900
          pt-20
          pb-10
        "
      >
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Marca */}
            <div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="flex items-center gap-4 mb-6"
              >
                <div
                  className="
                    w-14
                    h-14
                    border
                    border-black/20
                    rounded-xl
                    flex
                    items-center
                    justify-center
                  "
                >
                  <span className="font-heading text-xl">R</span>
                </div>

                <div>
                  <div className="font-heading text-2xl">RINOVA</div>

                  <div
                    className="
                      text-xs
                      uppercase
                      tracking-[4px]
                      text-gray-500
                    "
                  ></div>
                </div>
              </motion.div>

              <p
                className="
                  text-gray-600
                  leading-relaxed
                  max-w-md
                "
              >
                {language === "es"
                  ? `Administración privada de activos inmobiliarios en Punta del Este.
Combinamos experiencia, tecnología e inteligencia artificial para maximizar el valor de cada propiedad.`
                  : `Private real estate asset management in Punta del Este.
We combine experience, technology and artificial intelligence to maximize the value of every property.`}
              </p>
            </div>

            {/* Experiencias */}
            <div>
              <h4
                className="
                  font-heading
                  text-lg
                  mb-6
                "
              >
                {language === "es" ? "Experiencias" : "Experiences"}
              </h4>

              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => navigate("/real-estate")}
                    className="
                    text-gray-600
                    hover:text-black
                    transition-all
                    "
                  >
                    Real Estate
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/management")}
                    className="
                    text-gray-600
                    hover:text-black
                    transition-all
                    "
                  >
                    Property Management
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/renta")}
                    className="
                    text-gray-600
                    hover:text-black
                    transition-all
                    "
                  >
                    {language === "es" ? "Renta" : "Rental Income"}
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => navigate("/concierge")}
                    className="
                    text-gray-600
                    hover:text-black
                    transition-all
                    "
                  >
                    Concierge IA
                  </button>
                </li>
                <a href="/admin" className="text-xs opacity-30">
                  Admin
                </a>
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4
                className="
                  font-heading
                  text-lg
                  mb-6
                "
              >
                {language === "es" ? "Contacto" : "Contact"}
              </h4>

              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5" />

                  <span className="text-gray-600">+54 9 11 5341 3959</span>
                </li>

                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5" />

                  <span className="text-gray-600">
                    administracionrinova@gmail.com
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5" />

                  <span className="text-gray-600">
                    Punta del Este · Uruguay
                  </span>
                </li>
              </ul>

              <div className="flex gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="#"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-black
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="#"
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-green-600
                    text-white
                    flex
                    items-center
                    justify-center
                  "
                >
                  <MessageCircle className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
          </div>

          <div
            className="
              border-t
              border-black/10
              mt-16
              pt-8
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-4
            "
          >
            <p className="text-gray-500 text-sm">
              {language === "es"
                ? "© 2026 RINOVA. Todos los derechos reservados."
                : "© 2026 RINOVA. All rights reserved."}
            </p>

            <p className="text-gray-400 text-sm">
              Real Estate · Property Management · Concierge IA
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}