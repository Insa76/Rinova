import { ReactNode } from "react";

interface MessageBubbleProps {
  children: ReactNode;
}

export function MessageBubble({
  children,
}: MessageBubbleProps) {
  return (
    <div
      className="
        bg-[#F4EFE7]
        rounded-[24px]
        p-6
        mb-8
        max-w-3xl
        border
        border-gray-200
      "
    >
      <div
        className="
          flex
          items-center
          gap-3
          mb-4
        "
      >
        <div
          className="
            w-10
            h-10
            rounded-full
            bg-black
            text-white
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          AI
        </div>

        <div>
          <div
            className="
              text-sm
              font-medium
            "
          >
            SofIA
          </div>

          <div
            className="
              text-xs
              text-gray-500
            "
          >
            Concierge IA · Rinova
          </div>
        </div>
      </div>

      <div
        className="
          text-gray-700
          leading-relaxed
        "
      >
        {children}
      </div>
    </div>
  );
}