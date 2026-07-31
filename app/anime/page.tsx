"use client";
import { useMemo, useState } from "react";
import { anime } from "@/data/anime";

import SearchBar from "@/components/ui/SearchBar";
import AnimeGrid from "@/components/anime/AnimeGrid";
import GenreFilter from "@/components/anime/GenreFilter";
import YearFilter from "@/components/anime/YearFilter";
import LetterFilter from "@/components/anime/LetterFilter";

export default function AnimePage() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<number | "All">("All");
  const [selectedLetter, setSelectedLetter] = useState<string>("All");
  const genres = [
    "All",
    ...new Set(anime.flatMap((item) => item.genres)),
  ];
  const years = useMemo<(number | "All")[]>(() => {
  const nums = [...new Set(anime.map((item) => item.year))].sort((a, b) => b - a);
  return ["All", ...nums];
}, [anime]);
  const letters = useMemo(() => {
    const firstLetters = anime.map((item) =>
      item.title.charAt(0).toUpperCase()
    );
    return ["All", ...new Set(firstLetters)].sort((a, b) =>
      a === "All" ? -1 : b === "All" ? 1 : a.localeCompare(b)
    );
  }, []);
  const filteredAnime = anime.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" ||
      item.genres.includes(selectedGenre);

      const matchesYear =
      selectedYear === "All" || item.year === selectedYear;

      const matchesLetter =
      selectedLetter === "All" ||
      item.title.charAt(0).toUpperCase() === selectedLetter;

    return matchesSearch && matchesGenre && matchesYear && matchesLetter;
  });
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SearchBar
          search={search}
          setSearch={setSearch} />
        <GenreFilter
          genres={genres}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
        />
        <YearFilter
          years={years}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
        <LetterFilter
          letters={letters}
          selectedLetter={selectedLetter}
          onLetterChange={setSelectedLetter}
        />
        <h1 className="text-5xl font-bold mb-4">
          Anime Reviews
        </h1>

        <p className="text-gray-400 mb-10">
          Honest reviews and recommendations.
        </p>

        <AnimeGrid anime={filteredAnime} />
      </section>
    </main>
  );
}