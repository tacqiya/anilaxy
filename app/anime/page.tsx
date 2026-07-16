"use client";
import { useState } from "react";
import { anime } from "@/data/anime";

import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import AnimeGrid from "@/components/AnimeGrid";

export default function AnimePage() {
    const [search, setSearch] = useState("");
    const filteredAnime = anime.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
        <Navbar />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <SearchBar
            search={search}
            setSearch={setSearch} />
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