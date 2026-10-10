'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from './Button';
import type { Car } from '../../data/cars';

interface CarCardProps {
  car: Car;
  onRent?: (id: string) => void;
}

export function CarCard({ car, onRent }: CarCardProps) {
  const [isFavorite, setIsFavorite] = useState(Boolean(car.isFavorite));

  return (
    <article className="car-card">
      <header className="car-card__header">
        <div>
          <h3 className="car-card__title">{car.name}</h3>
          <p className="car-card__type">{car.type}</p>
        </div>
        <button
          type="button"
          className="car-card__fav"
          aria-pressed={isFavorite}
          aria-label="Toggle favorite"
          onClick={() => setIsFavorite((v) => !v)}
        >
          <Image src={isFavorite ? '/icons/like.svg' : '/icons/unlike.svg'} alt="" width={24} height={24} />
        </button>
      </header>

      <div className="car-card__image">
        <Image src={car.image} alt={car.name} width={car.imageWidth} height={car.imageHeight} />
      </div>

      <ul className="car-card__specs">
        <li className="spec"><Image src="/icons/tank.svg" alt="" width={24} height={24} />{car.fuelCapacity}</li>
        <li className="spec spec--tight"><Image src="/icons/car-type.svg" alt="" width={24} height={24} />{car.transmission}</li>
        <li className="spec"><Image src="/icons/profile-2user.svg" alt="" width={24} height={24} />{car.capacity}</li>
      </ul>

      <footer className="car-card__footer">
        <div className="car-card__price">
          <p className="car-card__price-main">
            <strong>${car.pricePerDay.toFixed(2)}/</strong>
            <span> day</span>
          </p>
          {car.oldPricePerDay && <s className="car-card__price-old">${car.oldPricePerDay.toFixed(2)}</s>}
        </div>
        <Button onClick={() => onRent?.(car.id)}>Rent Now</Button>
      </footer>
    </article>
  );
}
