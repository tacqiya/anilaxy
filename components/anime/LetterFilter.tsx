"use client";

import { Button } from "@/components/ui/Button";

type LetterFilterProps = {
  letters: string[];
  selectedLetter: string;
  onLetterChange: (letter: string) => void;
};

export default function LetterFilter({
  letters,
  selectedLetter,
  onLetterChange,
}: LetterFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {letters.map((letter) => (
        <Button
          key={letter}
          className={`px-3 py-1 rounded-full ${
            selectedLetter === letter
              ? "bg-blue-500 text-white"
              : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
          }`}
          onClick={() => onLetterChange(letter)}
        >
          {letter}
        </Button>
      ))}
    </div>
  );
}