import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black text-center py-36">
      <h1 className="text-6xl font-extrabold text-white">
        Discover Your Next Favorite Anime
      </h1>

      <p className="text-gray-400 text-xl mt-8 max-w-2xl mx-auto">
        Honest reviews, memorable characters,
        legendary fights, and beautiful manga.
      </p>

      <Button variant="destructive" size="lg" className="mt-10">
        Explore Reviews
      </Button>
    </section>
  );
}