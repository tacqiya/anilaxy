"use client";

import { Button } from "@/components/ui/Button";

type GenreFilterProps = {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
};

export default function GenreFilter({
  genres,
  selectedGenre,
  onGenreChange,
}: GenreFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {genres.map((genre) => (
        <Button
          key={genre}
          className={`px-4 py-2 rounded-full ${
                selectedGenre === genre
                  ? "bg-blue-500 text-white"
                  : "bg-zinc-800 text-gray-400 hover:bg-zinc-700"
              }`}
          variant={selectedGenre === genre ? "default" : "default"}
          onClick={() => onGenreChange(genre)}
        >
          {genre}
        </Button>
      ))}
    </div>
  );
}