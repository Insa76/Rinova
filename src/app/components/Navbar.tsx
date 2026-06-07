import { motion } from "motion/react";
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
    <nav
      className="
        absolute
        left-8
        top-1/2
        -translate-y-1/2
        z-[9999]
        hidden
        lg:block
      "
    >
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="
          w-[110px]
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[32px]
          py-8
          px-4
          flex
          flex-col
          items-center
          shadow-2xl
        "
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="mb-10 cursor-pointer"
        >
          <div
            className="
              w-14
              h-14
              border
              border-white/40
              rounded-xl
              flex
              items-center
              justify-center
              text-white
              text-xl
            "
          >
            R
          </div>
        </motion.div>

        {/* Menú */}
        <div className="flex flex-col gap-6 items-center">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileHover={{ x: 4 }}
              className="
                text-white/80
                hover:text-white
                text-sm
                tracking-wide
                transition-all
                text-center
              "
            >
              {item.label}
            </motion.a>
          ))}
        </div>

        {/* Idioma */}
        <div
          className="
            mt-10
            pt-6
            border-t
            border-white/20
            w-full
            text-center
          "
        >
          <div className="text-white text-sm">
            <button className="font-semibold">ES</button>
            <span className="mx-2 text-white/40">|</span>
            <button className="text-white/60 hover:text-white">
              EN
            </button>
          </div>
        </div>

        {/* Login */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            mt-8
            w-full
            bg-black
            text-white
            py-3
            rounded-full
            text-sm
            shadow-xl
          "
        >
          Login
        </motion.button>
      </motion.div>
    </nav>
  );
}