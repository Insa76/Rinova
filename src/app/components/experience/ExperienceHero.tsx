import { motion } from "motion/react";

interface ExperienceHeroProps {
  title: string;
  subtitle: string;
  location?: string;
  image: string;
  onBack: () => void;
}

export function ExperienceHero({
  title,
  subtitle,
  location,
  image,
  onBack,
}: ExperienceHeroProps) {
  return (
    <section className="px-8 pt-8">
      <div
        className="
          max-w-7xl
          mx-auto
          h-[550px]
          rounded-[40px]
          overflow-hidden
          relative
          shadow-2xl
        "
      >
        <img
          src={image}
          alt={title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-black/80
            via-black/40
            to-transparent
          "
        />

        <div
          className="
            relative
            z-10
            h-full
            flex
            flex-col
            justify-end
            p-12
          "
        >
          <button
            onClick={onBack}
            className="
              absolute
              top-8
              left-8
              bg-white
              text-black
              px-5
              py-3
              rounded-full
            "
          >
            ← Volver
          </button>

          {location && (
            <span
              className="
                text-white/70
                uppercase
                tracking-[4px]
                mb-4
              "
            >
              {location}
            </span>
          )}

          <h1
            className="
              font-heading
              text-white
              text-6xl
              md:text-8xl
            "
          >
            {title}
          </h1>

          <p
            className="
              text-white/80
              mt-4
              max-w-2xl
              text-lg
            "
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}