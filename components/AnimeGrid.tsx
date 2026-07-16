import AnimeCard from "./AnimeCard";

type Anime = {
  id: number;
  title: string;
  image: string;
  rating: number;
  studio: string;
  slug: string;
};

type AnimeGridProps = {
  anime: Anime[];
};

export default function AnimeGrid({ anime }: AnimeGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
  );
}