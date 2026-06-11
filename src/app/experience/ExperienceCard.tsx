import { motion } from "motion/react";

interface ExperienceCardProps {
  title: string;
  subtitle: string;
  image: string;
  onClick: () => void;
}

export function ExperienceCard({
  title,
  subtitle,
  image,
  onClick,
}: ExperienceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={onClick}
      className="
        group
        relative
        h-[380px]
        rounded-[32px]
        overflow-hidden
        cursor-pointer
        shadow-xl
      "
    >
      {/* Imagen */}
      <motion.img
        src={image}
        alt={title}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
        "
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.6,
        }}
      />

      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/90
          via-black/30
          to-transparent
        "
      />

      {/* Contenido */}
      <div
        className="
          absolute
          inset-0
          flex
          flex-col
          justify-end
          p-8
          text-white
        "
      >
        <div
          className="
            transform
            transition-all
            duration-300
            group-hover:-translate-y-2
          "
        >
          <h3
            className="
              font-heading
              text-3xl
              md:text-4xl
              mb-3
            "
          >
            {title}
          </h3>

          <p
            className="
              text-white/80
              text-base
              max-w-sm
            "
          >
            {subtitle}
          </p>
        </div>

        {/* Indicador */}
        <div
          className="
            mt-6
            flex
            items-center
            gap-2
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-300
          "
        >
          <span className="text-sm uppercase tracking-[3px]">
            Explorar
          </span>

          <span className="text-xl">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}