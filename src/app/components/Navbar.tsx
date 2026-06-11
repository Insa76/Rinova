import { motion } from "motion/react";

export function Navbar() {
  const items = [
    {
      short: "RE",
      label: "Real Estate",
      target: "real-estate",
    },
    {
      short: "PM",
      label: "Management",
      target: "management",
    },
    {
      short: "RT",
      label: "Renta",
      target: "renta",
    },
    {
      short: "IA",
      label: "Concierge",
      target: "concierge",
    },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className="
        absolute
        right-8
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
          w-[95px]
          bg-black/25
          backdrop-blur-xl
          border
          border-white/15
          rounded-[32px]
          py-8
          px-3
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
              rounded-xl
              border
              border-white/30
              flex
              items-center
              justify-center
              text-white
              text-xl
              font-heading
            "
          >
            R
          </div>
        </motion.div>

        {/* Navegación */}
        <div className="flex flex-col gap-6 items-center">
          {items.map((item) => (
            <motion.button
              key={item.short}
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() =>
                scrollToSection(item.target)
              }
              className="
                group
                flex
                flex-col
                items-center
              "
            >
              <span
                className="
                  text-white
                  text-sm
                  font-semibold
                  tracking-widest
                "
              >
                {item.short}
              </span>

              <span
                className="
                  text-[10px]
                  text-white/50
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                "
              >
                {item.label}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Separador */}
        <div
          className="
            w-full
            border-t
            border-white/10
            my-8
          "
        />

        {/* Idioma */}
        <div className="text-center">
          <button className="text-white text-sm font-semibold">
            ES
          </button>

          <div className="text-white/30 text-xs my-1">
            |
          </div>

          <button
            className="
              text-white/50
              hover:text-white
              text-sm
            "
          >
            EN
          </button>
        </div>

        {/* Concierge */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() =>
            scrollToSection("concierge")
          }
          className="
            mt-8
            w-full
            bg-white
            text-black
            rounded-full
            py-3
            text-xs
            font-semibold
          "
        >
          IA
        </motion.button>
      </motion.div>
    </nav>
  );
}