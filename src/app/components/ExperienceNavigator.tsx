import { motion } from "motion/react";

interface ExperienceNavigatorProps {
  items: {
    id: string;
    label: string;
  }[];
}

export function ExperienceNavigator({
  items,
}: ExperienceNavigatorProps) {
  return (
    <div
      className="
        fixed
        right-8
        top-1/2
        -translate-y-1/2
        z-50
        hidden
        xl:flex
        flex-col
        gap-5
      "
    >
      {items.map((item) => (
        <motion.a
          key={item.id}
          href={`#${item.id}`}
          whileHover={{ x: -8 }}
          className="
            group
            flex
            items-center
            justify-end
            gap-3
          "
        >
          <span
            className="
              opacity-0
              group-hover:opacity-100
              transition-all
              text-sm
              bg-white
              px-4
              py-2
              rounded-full
              shadow-lg
              whitespace-nowrap
            "
          >
            {item.label}
          </span>

          <div
            className="
              w-3
              h-3
              rounded-full
              bg-black/30
              group-hover:bg-black
              transition-all
            "
          />
        </motion.a>
      ))}
    </div>
  );
}