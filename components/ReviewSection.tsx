import AnimeCard from "./AnimeCard";
import SectionTitle from "./SectionTitle";

const anime = [
  {
    title: "Frieren",
    image: "/anime/frieren.jpg",
  },
  {
    title: "One Piece",
    image: "/anime/onepiece.jpg",
  },
  {
    title: "Attack on Titan",
    image: "/anime/aot.jpg",
  },
  {
    title: "Solo Leveling",
    image: "/anime/sololeveling.jpg",
  },
];

export default function ReviewSection() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <SectionTitle title="Latest Reviews" />

      <div className="grid md:grid-cols-4 gap-8">
        {anime.map((item) => (
          <AnimeCard
            key={item.title}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}