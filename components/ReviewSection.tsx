import AnimeCard from "./AnimeCard";
import SectionTitle from "./SectionTitle";

import { anime } from "@/data/anime";

export default function ReviewSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <SectionTitle title="Latest Reviews" />

      <div className="grid md:grid-cols-4 gap-8">
        {anime.map((item) => (
          <AnimeCard
            key={item.id}
            title={item.title}
            image={item.image}
            rating={item.rating}
            studio={item.studio}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}