export default function FilterSidebarSkeleton() {
    return (
        <aside className="w-[360px] min-h-[1050px] p-[32px] flex flex-col gap-[56px] bg-white border-r border-[#F3F5F7]">
            {[6, 4, 1].map((rows, group) => (
                <div key={group} className="flex flex-col gap-[28px]">
                    <div className="skeleton h-[20px] w-[60px]" />
                    <div className="flex flex-col gap-[32px]">
                        {Array.from({ length: rows }, (_, i) => (
                            <div key={i} className="skeleton h-[24px] w-[160px]" />
                        ))}
                    </div>
                </div>
            ))}
        </aside>
    )
}