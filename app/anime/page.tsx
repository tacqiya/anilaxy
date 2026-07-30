"use client";
import { useState } from "react";
import { anime } from "@/data/anime";

import SearchBar from "@/components/ui/SearchBar";
import AnimeGrid from "@/components/anime/AnimeGrid";
import GenreFilter from "@/components/anime/GenreFilter";

export default function AnimePage() {
    const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const genres = [
  "All",
  ...new Set(anime.flatMap((item) => item.genres)),
];
const filteredAnime = anime.filter((item) => {
  const matchesSearch = item.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesGenre =
    selectedGenre === "All" ||
    item.genres.includes(selectedGenre);

  return matchesSearch && matchesGenre;
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