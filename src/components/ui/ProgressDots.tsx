"use client";

export default function ProgressDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`w-3 h-3 rounded-full ${i + 1 === current ? "bg-red-500" : "bg-gray-300"}`}
        />
      ))}
    </div>
  );
}
