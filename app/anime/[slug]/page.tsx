import { anime } from "@/data/anime";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function AnimePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const selectedAnime = anime.find((item) => item.slug === slug);

  if (!selectedAnime) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-10">
      <div className="max-w-5xl mx-auto">
        <Image
          src={selectedAnime.image}
          alt={selectedAnime.title}
          width={600}
          height={800}
          className="rounded-xl mb-8"
        />

        <h1 className="text-5xl font-bold">
          {selectedAnime.title}
        </h1>

        <div className="flex flex-wrap gap-2 mt-6">
          {selectedAnime.genres.map((genre) => (
            <span
              key={genre}
              className="bg-red-600 px-3 py-1 rounded-full text-sm"
            >
              {genre}
            </span>
          ))}
        </div>

        <div className="mt-8 bg-zinc-900 rounded-xl p-6">
          <p><strong>Studio:</strong> {selectedAnime.studio}</p>
          <p><strong>Year:</strong> {selectedAnime.year}</p>
          <p><strong>Episodes:</strong> {selectedAnime.episodes}</p>
          <p><strong>Status:</strong> {selectedAnime.status}</p>
        </div>

        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">
            Synopsis
          </h2>
          <p className="text-gray-300 leading-8">
            {selectedAnime.description}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">
            My Review
          </h2>
          <p className="text-gray-300 leading-8">
            {selectedAnime.review}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">
            Pros
          </h2>

          <ul className="space-y-2">
            {selectedAnime.pros.map((pro) => (
              <li key={pro}>✅ {pro}</li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-3xl font-bold mb-4">
            Cons
          </h2>
          <ul className="space-y-2">
            {selectedAnime.cons.map((con) => (
              <li key={con}>❌ {con}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-4xl font-bold">
            Final Verdict
          </h2>
          <p className="text-6xl mt-6">
            ⭐⭐⭐⭐⭐
          </p>
          <p className="text-3xl mt-4 font-bold text-yellow-400">
            {selectedAnime.rating}/10
          </p>
        </section>

      </div>
    </main>
  );
}