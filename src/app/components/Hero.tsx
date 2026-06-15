import { motion } from "motion/react";
import hero from "../../assets/images/rinova/hero.jpeg";
import { useLanguage } from "../../context/LanguageContext";

export function Hero() {
  const scrollToExperiences = () => {
    const section = document.getElementById("experience-hub");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const { language } = useLanguage();

  return (
    <section
      className="relative px-4 pt-4 shadow-xl shadow-black/70"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      {/* Overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/60
            via-black/30
            to-transparent
            
          "
        />
      
      <div
        className="
          relative
          overflow-visible
          rounded-[32px]
          w-[85%]
          max-w-[1600px]
          mx-auto
          h-[750px]
          mt-24
        "
      >
        {/* Overlay 
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/60
            via-black/30
            to-transparent
            rounded-[32px]
          "
        />*/}

        {/* Contenido */}
        <div
          className="
            relative
            z-10
            h-full
            flex
            items-center
            px-10
            md:px-16
          "
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="
                  inline-flex
                  items-center
                  px-4
                  py-2
                  rounded-full
                  bg-white/10
                  backdrop-blur-md
                  text-white
                  text-sm
                  border
                  border-white/20
                "
              >
                {
  language === "es"
    ? "Punta del Este · Uruguay"
    : "Punta del Este · Uruguay"
}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                font-heading
                text-white
                text-5xl
                md:text-7xl
                lg:text-8xl
                leading-none
                mt-8
              "
            >
              {
  language === "es"
    ? "Punta del Este · Uruguay"
    : "Punta del Este · Uruguay"
}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                mt-8
                text-xl
                text-white/85
                max-w-2xl
                leading-relaxed
              "
            >
              {
  language === "es"
    ? `Compramos, gestionamos y rentabilizamos propiedades
en Punta del Este mediante un modelo de atención
boutique, tecnología e inteligencia artificial.`
    : `We acquire, manage and maximize the profitability
of real estate assets in Punta del Este through
a boutique service model, technology and artificial intelligence.`
}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <button
                onClick={scrollToExperiences}
                className="
                  bg-white
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-medium
                  hover:scale-105
                  transition-all
                "
              >
                {
  language === "es"
    ? "Comenzar Experiencia"
    : "Start Experience"
}
              </button>

              <button
                className="
                  border
                  border-white/30
                  text-white
                  px-8
                  py-4
                  rounded-full
                  backdrop-blur-md
                  hover:bg-white/10
                  transition-all
                "
              >
                {
  language === "es"
    ? "Conocer Rinova"
    : "Discover Rinova"
}
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </section>
  );
}