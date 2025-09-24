"use client";

import OptionCard from "./OptionCard";

export default function Question({
  title,
  subtitle,
  options,
  onSelect,
}: {
  title: string;
  subtitle: string;
  options: string[];
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{subtitle}</p>
      <div className="grid gap-3">
        {options.map((o) => (
          <OptionCard key={o} label={o} onClick={() => onSelect(o)} />
        ))}
      </div>
    </div>
  );
}
