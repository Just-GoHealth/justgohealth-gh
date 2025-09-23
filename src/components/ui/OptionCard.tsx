"use client";

export default function OptionCard({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full p-4 border rounded-xl text-left hover:bg-gray-100 transition"
    >
      {label}
    </button>
  );
}
