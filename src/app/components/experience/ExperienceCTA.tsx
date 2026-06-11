interface ExperienceCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

export function ExperienceCTA({
  title,
  description,
  buttonText,
}: ExperienceCTAProps) {
  return (
    <div
      className="
        bg-black
        text-white
        rounded-[40px]
        p-12
        text-center
      "
    >
      <h2
        className="
          font-heading
          text-4xl
          mb-6
        "
      >
        {title}
      </h2>

      <p
        className="
          text-white/70
          max-w-2xl
          mx-auto
          mb-8
        "
      >
        {description}
      </p>

      <button
        className="
          px-8
          py-4
          bg-white
          text-black
          rounded-full
          font-medium
        "
      >
        {buttonText}
      </button>
    </div>
  );
}