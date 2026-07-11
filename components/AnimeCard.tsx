import Image from "next/image";

type AnimeCardProps = {
  title: string;
  image: string;
};

export default function AnimeCard({
  title,
  image,
}: AnimeCardProps) {
  return (
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
      </div>
    </div>
  );
}