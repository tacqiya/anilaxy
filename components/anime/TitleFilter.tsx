"use client";

import { Button } from "@/components/ui/Button";

type TitleFilterProps = {
  titles: string[];
  selectedTitle: string;
  onTitleChange: (title: string) => void;
};

export default function TitleFilter({
  titles,
  selectedTitle,
  onTitleChange,
}: TitleFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {titles.map((title) => (
        <Button
          key={title}
          className={`px-4 py-2 rounded-full ${
            selectedTitle === title
              ? "bg-blue-500 text-white"
              : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
          }`}
          onClick={() => onTitleChange(title)}
        >
          {title}
        </Button>
      ))}
    </div>
  );
}