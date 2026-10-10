import Image from 'next/image';
import { HeroCard } from '../components/HeroCard';
import { BookingForm } from '../components/BookingForm';
import { CarCard } from '../components/CarCard';
import { Button } from '../components/Button';
import { popularCars, recommendedCars } from '../../data/cars';

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <HeroCard
          title="The Best Platform for Car Rental"
          description="Ease of doing a car rental safely and reliably. Of course at a low price."
          buttonText="Rental Car"
          bgSrc="/icons/ads1.svg"
          carSrc="/icons/car.svg"
          variant="light"
        />
        <HeroCard
          title="Easy way to rent a car at a low price"
          description="Providing cheap car rental services and safe and comfortable facilities."
          buttonText="Rental Car"
          bgSrc="/icons/ads2.svg"
          carSrc="/icons/car.svg"
          variant="dark"
        />
      </section>

      <section className="booking-section">
        <BookingForm title="Pick - Up" type="pickup" />
        <div className="swap">
          <button type="button" className="swap__btn" aria-label="Swap locations">
            <Image src="/icons/swap.svg" alt="" width={24} height={24} />
          </button>
        </div>
        <BookingForm title="Drop - Off" type="dropoff" />
      </section>

      <div className="catalog">
        <section>
          <div className="section-header">
            <h2 className="section-title">Popular Car</h2>
            <a href="#" className="view-all">View All</a>
          </div>
          <div className="cars-grid">
            {popularCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </section>

        <section>
          <div className="section-header">
            {/* Написание как в макете (Recomendation) */}
            <h2 className="section-title">Recomendation Car</h2>
          </div>
          <div className="cars-grid">
            {recommendedCars.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </section>
      </div>

      <div className="show-more">
        <Button className='btn--show-more'>Show more car</Button>
        <span className="show-more__count">120 Car</span>
      </div>
    </>
  );
}
