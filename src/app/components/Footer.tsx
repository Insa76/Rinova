import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
  <section className="bg-[#F4EFE7] px-4 pb-4 ">
    <footer
      className="
        text-gray-900
        rounded-b-[32px]
        overflow-hidden
        pt-16
        pb-8
        shadow-xl
        border-1 border-gray-500
        shadow-xl shadow-black/70
      "
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 border border-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 text-sm">R</span>
            </div>

            <div>
              <div className="text-gray-900 text-xl font-semibold tracking-wide">
                RINOVA
              </div>

              <div className="text-gray-900 text-xs uppercase tracking-[3px]">
                Real Estate
              </div>
            </div>
          </motion.div>
            <p className="text-gray-600 mb-6">
              Tu socio de confianza en el mercado inmobiliario de Punta del Este desde 1996.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#7EC8E3] transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#propiedades" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Propiedades
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Casas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Apartamentos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Terrenos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-[#7EC8E3] transition-colors">
                  Comerciales
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-600">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+54 9 11 5341 3959</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>ornela.vietagizzi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2026 RINOVA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </section>
  );
}
