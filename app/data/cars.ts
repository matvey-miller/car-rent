export interface Car {
  id: string;
  name: string;
  type: string;
  category: "popular" | "recommended";
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  gallery: string[];
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  pricePerDay: number;
  oldPricePerDay?: number;
  isFavorite?: boolean;
}
