import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Comprar", href: "#propiedades" },
    { label: "Vender", href: "#servicios" },
    { label: "Alquilar", href: "#nosotros" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Contacto", href: "#contacto" },
  ];

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="absolute top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-34">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-15 h-15 border border-black rounded-lg flex items-center justify-center">
              <span className="text-black text-xl">R</span>
            </div>

            <div>
              <div className="font-heading text-black text-xl font-semibold tracking-wide">
                RINOVA
              </div>

              <div className="font-heading text-black/70 text-xl uppercase tracking-[3px]">
                Real Estate
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="font-heading text-black/90 hover:text-black transition-colors text-sm tracking-wide"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Idioma + Login */}
<div className="hidden lg:flex items-center gap-4">

  {/* Selector de idioma */}
  <div className="flex items-center bg-white/15 backdrop-blur-md rounded-full p-1 border border-white/20">
    <div className="font-heading text-white text-sm font-medium">
  <button className="text-white">ES</button>
  <span className="mx-2 text-white/50">|</span>
  <button className="font-heading text-white/60 hover:text-white">
    EN
  </button>
</div>
  </div>

  {/* Login */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="
      bg-white
      text-black
      px-7
      py-3
      rounded-full
      font-medium
      shadow-lg
    "
  >
    Login
  </motion.button>

</div>

          {/* Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              lg:hidden
              bg-white/95
              backdrop-blur-md
              rounded-2xl
              p-6
              shadow-xl
            "
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    text-gray-800
                    hover:text-sky-500
                    transition-colors
                  "
                >
                  {item.label}
                </a>
              ))}

              <button
                className="
                  font-heading
                  mt-4
                  bg-black
                  text-white
                  py-3
                  rounded-full
                "
              >
                Login
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}