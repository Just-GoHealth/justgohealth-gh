"use client";

export default function CTAButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-red-600 w-50 text-white rounded-full font-semibold hover:bg-red-700 transition"
    >
      {children}
    </button>
  );
}
