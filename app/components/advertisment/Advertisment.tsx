import Image from "next/image";

type AdvertismentProps = {
  number: 1 | 2;
};

const ads = {
  1: {
    title: "The Best Platform for Car Rental",
    text: "Ease of doing a car rental safely and reliably. Of course at a low price.",
    buttonClass: "bg-primary-500",
    car: { src: "/cars/car1adv.svg", className: "w-[406px] h-[116px] right-[97px] bottom-[10px]" },
  },
  2: {
    title: "Easy way to rent a car at a low price",
    text: "Providing cheap car rental services and safe and comfortable facilities.",
    buttonClass: "bg-information-500",
    car: { src: "/cars/car2adv.svg", className: "w-[340px] h-[108px] right-[113px] bottom-[20px]" },
  },
} as const;

export default function Advertisment({ number }: AdvertismentProps) {
  const ad = ads[number];

  return (
    <aside className={`adv-bg adv-${number} relative overflow-hidden rounded-[10px] text-white`}>
      <div className="absolute top-[24px] left-[24px]">

        <h2 className="max-w-[272px] text-s-4 font-semibold tracking-[-0.03em] leading-[150%]">
          {ad.title}
        </h2>

        <p className="mt-[16px] max-w-[280px] text-s-8 font-medium tracking-[-0.02em] leading-[150%]">
          {ad.text}
        </p>

        <button
          className={`btn mt-[20px] w-[120px] h-[44px] text-s-8 font-semibold tracking-[-0.02em] leading-[150%] text-white ${ad.buttonClass}`}
        >
          Rental Car
      </button>
      </div>

      <Image
        src={ad.car.src}
        alt={`car${number}`}
        width={406}   // для next/image обязательны, на вёрстку уже не влияют
        height={116}
        className={`absolute object-contain ${ad.car.className}`}
      />
    </aside>
  );
}