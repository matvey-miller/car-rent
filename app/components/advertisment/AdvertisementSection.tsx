import Advertisement from "./Advertisement"

export default function AdvertisementSection() {
    return (
        <div className="w-full h-[360px] flex justify-center gap-[32px]">
            <Advertisement number={1} carSrc="/cars/car1adv.svg" />
            <Advertisement number={2} carSrc="/cars/car2adv.svg" />
        </div>
    )
}