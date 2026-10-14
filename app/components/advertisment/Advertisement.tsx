type AdvertismentProps = {
  number: 1 | 2 | 3;
  carSrc?: string;
};

interface AdData {
  title: string;
  text: string;
  carSrc?: string;
  carClass: string;
  buttonClass?: string;
}

const ads: Record<number, AdData> = {
  1: {
    title: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    carSrc: "/adv/car-1.svg",
    carClass: "w-[406px] h-[116px] bottom-[10px] right-[97px]",
    buttonClass: "bg-primary-500",
  },
  2: {
    title: "Easy way to rent a car at a low price",
    text: "Providing cheap car rental services and safe and comfortable facilities.",
    carSrc: "/adv/car-2.svg",
    carClass: "w-[340px] h-[108px] bottom-[20px] right-[113px]",
    buttonClass: "bg-information-500",
  },
  3: {
    title: "Sports car with the best design and acceleration",
    text: "Safety and comfort while driving a futuristic and elegant sports car",
    carClass: "w-[380px] h-[120px] bottom-[24px] right-[56px]", // размеры из Figma
  },
};

export default function Advertisement({ number, carSrc }: AdvertismentProps) {
  const ad = ads[number];

  return (
    <aside className={`adv-bg adv-${number} relative`}>
      <div className="absolute top-[24px] left-[24px] text-white">
        <div className="flex flex-col gap-[16px]">
          <h2 className="adv-title">{ad.title}</h2>
          <p className="adv-text">{ad.text}</p>
        </div>
        

        {ad.buttonClass && (
          <button className={`btn mt-[20px] w-[120px] h-[44px] text-s-8 font-semibold tracking-[-0.02em] leading-[150%] text-white ${ad.buttonClass}`}>
            Rental Car
          </button>
        )}
      </div>

      <img src={carSrc ?? ad.carSrc} alt="" className={`absolute ${ad.carClass}`} />
    </aside>
  );
}