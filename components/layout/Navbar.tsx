import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold text-red-500">
        AnimeVerse
      </h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-red-500"><Link href="/">Home</Link></li>
        <li className="cursor-pointer hover:text-red-500"><Link href="/anime">Anime</Link></li>
        <li className="cursor-pointer hover:text-red-500"><Link href="/manga">Manga</Link></li>
        <li className="cursor-pointer hover:text-red-500"><Link href="/characters">Characters</Link></li>
        <li className="cursor-pointer hover:text-red-500"><Link href="/scenes">Scenes</Link></li>
      </ul>
    </nav>
  );
}