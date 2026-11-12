import Link from "next/link";
import Image from "next/image";

type AdvertisementProps = {
  number: 1 | 2 | 3;
  carSrc?: string;
};

interface AdData {
  title: string;
  text: string;
  carSrc?: string;
  carWidth: number;
  carHeight: number;
  carClass: string;
  buttonClass?: string;
}

const ads: Record<number, AdData> = {
  1: {
    title: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    carSrc: "/cars/car1adv.png",
    carWidth: 406,
    carHeight: 116,
    carClass: "bottom-[10px] right-[97px]",
    buttonClass: "bg-primary-500",
  },
  2: {
    title: "Easy way to rent a car at a low price",
    text: "Providing cheap car rental services and safe and comfortable facilities.",
    carSrc: "/cars/car2adv.png",
    carWidth: 340,
    carHeight: 108,
    carClass: "bottom-[20px] right-[113px]",
    buttonClass: "bg-information-500",
  },
  3: {
    title: "Sports car with the best design and acceleration",
    text: "Safety and comfort while driving a futuristic and elegant sports car",
    carWidth: 380,
    carHeight: 120,
    carClass: "bottom-[24px] right-[56px]", 
  },
};

export default function Advertisement({number, carSrc}: AdvertisementProps) {
  const ad = ads[number];

  return (
    <aside className={`adv-bg adv-${number} relative overflow-hidden rounded-[10px]`}>
      {/* Фоновое изображение */}
      <Image 
        src={`/adv/adv-${number}.svg`} 
        alt=""
        fill
        priority
        className="object-cover"
      />
      
      <div className="absolute top-[24px] left-[24px] text-white z-10">
        <div className="flex flex-col gap-[16px]">
          <h2 className="adv-title">{ad.title}</h2>
          <p className="adv-text">{ad.text}</p>
        </div>
        
        {ad.buttonClass && (
          <Link
            href={`/category`}
            className={`btn mt-[20px] w-[120px] h-[44px] text-s-8 font-semibold tracking-[-0.02em] leading-[150%] text-white ${ad.buttonClass}`}
          >
            Rental Car
          </Link>
        )}
      </div>

      {/* Изображение машины */}
      <Image 
        src={carSrc ?? ad.carSrc!} 
        alt="" 
        width={ad.carWidth}
        height={ad.carHeight}
        priority
        className={`absolute z-10 ${ad.carClass}`} 
      />
    </aside>
  );
}