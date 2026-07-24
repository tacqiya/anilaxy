import Image from "next/image";
import Link from "next/link";
import { Anime } from "@/types/anime";

type AnimeCardProps = Pick<Anime, "title" | "image" | "rating" | "studio" | "slug">;

export default function AnimeCard({
  title,
  image,
  rating,
  studio,
  slug,
}: AnimeCardProps) {
  return (
    <Link href={`/anime/${slug}`}>
    <div className="bg-zinc-900 rounded-xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg">
      <Image
        src={image}
        alt={title}
        width={400}
        height={550}
        className="w-full h-72 object-cover"
      />

      <div className="p-5">
        <h3 className="text-white text-xl font-bold">
          {title}
        </h3>

        <p className="text-gray-400 mt-2">
          Read the full review →
        </p>

        <p className="text-yellow-400 mt-2">
        ⭐ {rating}/10
        </p>

        <p className="text-gray-400">
          {studio}
        </p>
      </div>
    </div>
    </Link>
  );
}