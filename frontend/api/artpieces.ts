export interface ArtPiece {
  id: number;
  name: string;
  images: string[];
  description: string;
  materials: string;
  size: string;
  display: string;
  availability: boolean;
  price: number;
}

// Import VITE_API_URL from Vite env
const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchArtPieces = async (): Promise<ArtPiece[]> => {
  const res = await fetch(`${BASE_URL}/artpieces`);
  if (!res.ok) throw new Error("Failed to fetch art pieces");
  return res.json();
};
