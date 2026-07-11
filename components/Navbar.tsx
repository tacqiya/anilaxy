export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-bold text-red-500">
        AnimeVerse
      </h1>

      <ul className="flex gap-8">
        <li className="cursor-pointer hover:text-red-500">Home</li>
        <li className="cursor-pointer hover:text-red-500">Anime</li>
        <li className="cursor-pointer hover:text-red-500">Manga</li>
        <li className="cursor-pointer hover:text-red-500">Characters</li>
        <li className="cursor-pointer hover:text-red-500">Scenes</li>
      </ul>
    </nav>
  );
}