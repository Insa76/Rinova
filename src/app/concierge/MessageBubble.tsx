interface MessageBubbleProps {
  role: "assistant" | "user";
  text: string;
}

export function MessageBubble({
  role,
  text,
}: MessageBubbleProps) {
  return (
    <div
      className={`
        flex
        ${role === "user"
          ? "justify-end"
          : "justify-start"}
      `}
    >
      <div
        className={`
          max-w-[75%]
          px-5
          py-4
          rounded-[24px]

          ${
            role === "assistant"
              ? "bg-[#F4EFE7]"
              : "bg-black text-white"
          }
        `}
      >
        {text}
      </div>
    </div>
  );
}