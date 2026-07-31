"use client";

import { Button } from "@/components/ui/Button";

type YearFilterProps = {
  years: (number | "All")[];
  selectedYear: number | "All";
  onYearChange: (year: number | "All") => void;
};

export default function YearFilter({
  years,
  selectedYear,
  onYearChange,
}: YearFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {years.map((year) => (
        <Button
          key={year}
          className={`px-4 py-2 rounded-full ${
                selectedYear === year
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
          variant={selectedYear === year ? "default" : "default"}
          onClick={() => onYearChange(year)}
        >
          {year}
        </Button>
      ))}
    </div>
  );
}