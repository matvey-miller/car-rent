export interface Car {
  id: string;
  name: string;
  type: string;
  image: string;
  imageWidth: number;   // размер картинки машины в Figma
  imageHeight: number;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  pricePerDay: number;
  oldPricePerDay?: number;
  isFavorite?: boolean;
}

// Пока одна картинка на все карточки, потом заменишь на реальные
const IMG = '/icons/car.svg';

export const popularCars: Car[] = [
  { id: '1', name: 'Koenigsegg', type: 'Sport', image: IMG, imageWidth: 232, imageHeight: 72, fuelCapacity: '90L', transmission: 'Manual', capacity: '2 People', pricePerDay: 99, isFavorite: true },
  { id: '2', name: 'Nissan GT - R', type: 'Sport', image: IMG, imageWidth: 204, imageHeight: 64, fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People', pricePerDay: 80, oldPricePerDay: 100 },
  { id: '3', name: 'Rolls - Royce', type: 'Sedan', image: IMG, imageWidth: 220, imageHeight: 68, fuelCapacity: '70L', transmission: 'Manual', capacity: '4 People', pricePerDay: 96, isFavorite: true },
  { id: '4', name: 'Nissan GT - R', type: 'Sport', image: IMG, imageWidth: 204, imageHeight: 64, fuelCapacity: '80L', transmission: 'Manual', capacity: '2 People', pricePerDay: 80, oldPricePerDay: 100 },
];

export const recommendedCars: Car[] = [
  { id: '5', name: 'All New Rush', type: 'SUV', image: IMG, imageWidth: 224, imageHeight: 100, fuelCapacity: '70L', transmission: 'Manual', capacity: '6 People', pricePerDay: 72, oldPricePerDay: 80 },
  { id: '6', name: 'CR - V', type: 'SUV', image: IMG, imageWidth: 248, imageHeight: 100, fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People', pricePerDay: 80, isFavorite: true },
  { id: '7', name: 'All New Terios', type: 'SUV', image: IMG, imageWidth: 224, imageHeight: 100, fuelCapacity: '90L', transmission: 'Manual', capacity: '6 People', pricePerDay: 74 },
  { id: '8', name: 'CR - V', type: 'SUV', image: IMG, imageWidth: 248, imageHeight: 100, fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People', pricePerDay: 80, isFavorite: true },
  { id: '9', name: 'MG ZX Exclusice', type: 'Hatchback', image: IMG, imageWidth: 264, imageHeight: 108, fuelCapacity: '70L', transmission: 'Manual', capacity: '4 People', pricePerDay: 76, oldPricePerDay: 80, isFavorite: true },
  { id: '10', name: 'New MG ZS', type: 'SUV', image: IMG, imageWidth: 288, imageHeight: 112, fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People', pricePerDay: 80 },
  { id: '11', name: 'MG ZX Excite', type: 'Hatchback', image: IMG, imageWidth: 264, imageHeight: 108, fuelCapacity: '90L', transmission: 'Manual', capacity: '4 People', pricePerDay: 74, isFavorite: true },
  { id: '12', name: 'New MG ZS', type: 'SUV', image: IMG, imageWidth: 288, imageHeight: 112, fuelCapacity: '80L', transmission: 'Manual', capacity: '6 People', pricePerDay: 80 },
];
