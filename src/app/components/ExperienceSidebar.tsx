import { motion } from "motion/react";

interface ExperienceSidebarProps {
  title: string;
  items: string[];
}

export function ExperienceSidebar({
  title,
  items,
}: ExperienceSidebarProps) {
  return (
    <aside
      className="
        hidden
        xl:block
        w-[260px]
      "
    >
      <div
        className="
          sticky
          top-10
          bg-white
          rounded-[32px]
          p-8
          shadow-xl
        "
      >
        <h3
          className="
            font-heading
            text-2xl
            mb-8
          "
        >
          {title}
        </h3>

        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <motion.button
              key={item}
              whileHover={{ x: 6 }}
              className="
                text-left
                py-3
                px-4
                rounded-xl
                hover:bg-[#F4EFE7]
                transition-all
              "
            >
              {item}
            </motion.button>
          ))}
        </div>
      </div>
    </aside>
  );
}