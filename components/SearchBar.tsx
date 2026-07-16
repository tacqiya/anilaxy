"use client";

type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
    search,
    setSearch
}: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search anime..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-700 mb-10"
    />
  );
}