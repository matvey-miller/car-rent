export default function CarCardSkeleton() {
    return (
        <div className="h-[388px] rounded-[10px] bg-white p-[24px] flex flex-col">
            <div className="h-[48px] flex flex-col gap-[8px]">
                <div className="skeleton h-[24px] w-[140px]" />
                <div className="skeleton h-[16px] w-[60px]" />
            </div>

            <div className="h-[200px] flex items-center justify-center">
                <div className="skeleton w-[220px] h-[72px]" />
            </div>

            <div className="flex gap-[16px] h-[24px]">
                {[0, 1, 2].map((i) => <div key={i} className="skeleton h-[24px] flex-1" />)}
            </div>

            <div className="flex justify-between items-center h-[44px] mt-[24px]">
                <div className="skeleton h-[28px] w-[110px]" />
                <div className="skeleton h-[44px] w-[116px]" />
            </div>
        </div>
    )
}