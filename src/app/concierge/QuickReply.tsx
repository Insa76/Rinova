interface QuickReplyProps {
  label: string;
  onClick: () => void;
}

export function QuickReply({
  label,
  onClick,
}: QuickReplyProps) {
  return (
    <button
      onClick={onClick}
      className="
        px-5
        py-3
        rounded-full
        border
        border-gray-200
        hover:bg-black
        hover:text-white
        transition-all
      "
    >
      {label}
    </button>
  );
}