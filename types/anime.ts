export interface Anime {
  id: number;
  slug: string;
  title: string;
  studio: string;
  year: number;
  episodes: number;
  status: string;
  rating: number;
  image: string;
  coverImage: string;
  description: string;
  review: string;
  genres: string[];
  pros: string[];
  cons: string[];
  trailer: string;
}