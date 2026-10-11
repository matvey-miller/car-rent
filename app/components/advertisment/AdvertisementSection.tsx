import Advertisment from "./Advertisment"

export default function AdvertisementSection() {
    return (
        <div className="w-full h-[360px] flex justify-center gap-[32px]">
            <Advertisment number={1}/>
            <Advertisment number={2}/>
        </div>
    )
}