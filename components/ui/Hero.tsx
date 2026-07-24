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

      <button className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-white font-semibold transition">
        Explore Reviews
      </button>
    </section>
  );
}